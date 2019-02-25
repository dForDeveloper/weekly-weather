import { fetchData } from '../utils/api';
import { cleanData } from '../utils/dataCleaner';
import { setWeather, setError } from '../actions';

export const getWeather = ({ latitude: lat, longitude: lon }) => {
  return async (dispatch) => {
    try {
      const url = `http://localhost:3001/api/v1/weather/${lat}/${lon}`;
      const weather = await fetchData(url);
      dispatch(setWeather(cleanData(weather)));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))      
    }
  }
}