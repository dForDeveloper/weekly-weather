import { fetchData } from '../utils/api';
import { setCity, setError } from '../actions';

export const reverseGeocode = ({ latitude: lat, longitude: lon }) => {
  return async (dispatch) => {
    try {
      const url = `http://weekly-weather.herokuapp.com/api/v1/reversegeocode/${lat}/${lon}`;
      const geocodeData = await fetchData(url);
      const { city, state_code } = geocodeData[0].components;
      dispatch(setCity(`${city}, ${state_code}`));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}