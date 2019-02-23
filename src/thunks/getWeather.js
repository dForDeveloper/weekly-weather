import { fetchData } from '../utils/api';
import { setWeather, setError, toggleLoading } from '../actions';

export const getWeather = ({ latitude: lat, longitude: lon }) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const url = `http://localhost:3001/api/v1/weather/${lat}/${lon}`;
      const weather = await fetchData(url);
      dispatch(setWeather(weather));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))      
    }
    dispatch(toggleLoading(false));
  }
}