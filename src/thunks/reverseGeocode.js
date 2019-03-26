import { fetchData } from '../utils/api';
import { setCity, setError, setUserTimezone } from '../actions';

export const reverseGeocode = ({ latitude: lat, longitude: lon }, history) => {
  return async (dispatch) => {
    try {
      const url = `https://weekly-weather.herokuapp.com/api/v1/reversegeocode/${lat}/${lon}`;
      const geocodeData = await fetchData(url);
      const { offset_sec } = geocodeData[0].annotations.timezone;
      dispatch(setUserTimezone(offset_sec));
      const { city, locality, state_district, state_code } = geocodeData[0].components;
      const cityName = city || locality || state_district;
      dispatch(setCity(`${cityName}, ${state_code}`));
      history.push('/' + encodeURI(`${state_code}/${cityName}`));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}