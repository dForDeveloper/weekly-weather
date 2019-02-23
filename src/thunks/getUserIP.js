import { fetchData } from '../utils/api';
import { setCoordinates, setError } from '../actions';
import { reverseGeocode } from '../thunks/reverseGeocode';
import { getWeather } from '../thunks/getWeather';

export const getUserIP = () => {
  return async (dispatch) => {
    try{ 
      const url = 'http://ip-api.com/json';
      const { lat: latitude, lon: longitude } = await fetchData(url);
      dispatch(setCoordinates({ latitude, longitude }));
      dispatch(reverseGeocode({ latitude, longitude }));
      dispatch(getWeather({ latitude, longitude }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}