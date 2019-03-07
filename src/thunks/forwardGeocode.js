import { fetchData } from '../utils/api';
import { setCoordinates, setCity, setError, toggleLoading } from '../actions';
import { getWeather } from '../thunks/getWeather';

export const forwardGeocode = (userQuery, history) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const query = userQuery.replace(/\s/g, '+').replace(/,/g, '%2C');
      const url = `https://weekly-weather.herokuapp.com/api/v1/forwardgeocode/${query}`;
      const geocodeData = await fetchData(url);
      const { lat: latitude, lng: longitude } = geocodeData[0].geometry;
      const { city, locality, state_district, state_code } = geocodeData[0].components;
      const cityName = city || locality || state_district;
      dispatch(setCity(`${cityName}, ${state_code}`));
      dispatch(setCoordinates({ latitude, longitude }));
      await dispatch(getWeather({ latitude, longitude }));
      history.push('/' + encodeURI(`${state_code}/${cityName}`));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
    dispatch(toggleLoading(false));
  }
}