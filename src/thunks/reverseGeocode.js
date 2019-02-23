import { fetchData } from '../utils/api';
import { setCity, setError, toggleLoading } from '../actions';

export const reverseGeocode = ({ latitude: lat, longitude: lon }) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const url = `http://localhost:3001/api/v1/reversegeocode/${lat}/${lon}`;
      const geocodeData = await fetchData(url);
      const { city, state_code } = geocodeData[0].components;
      dispatch(setCity(`${city}, ${state_code}`));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
    dispatch(toggleLoading(false));
  }
}