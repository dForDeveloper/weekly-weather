import { fetchData } from '../utils/api';
import { setCoordinates, setCity, setError, toggleLoading } from '../actions';
import { getWeather } from '../thunks/getWeather';

export const forwardGeocode = (query) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try {
      query = query.replace(/\s/g, '+');
      query = query.replace(/,/g, '%2C');
      const url = `http://localhost:3001/api/v1/forwardgeocode/${query}`;
      const geocodeData = await fetchData(url);
      const { lat: latitude, lng: longitude } = geocodeData[0].geometry;
      const { city, state_code } = geocodeData[0].components;
      dispatch(setCity(`${city}, ${state_code}`));
      dispatch(setCoordinates({ latitude, longitude }));
      dispatch(getWeather({ latitude, longitude }));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
    dispatch(toggleLoading(false));
  }
}