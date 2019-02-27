import { fetchData } from '../utils/api';
import { setCoordinates, setError, toggleLoading } from '../actions';
import { reverseGeocode } from '../thunks/reverseGeocode';
import { getWeather } from '../thunks/getWeather';

export const getUserIP = () => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try{
      const url = 'https://weekly-weather.herokuapp.com/api/v1/ip';
      const { latitude, longitude } = await fetchData(url);
      dispatch(setCoordinates({ latitude, longitude }));
      dispatch(reverseGeocode({ latitude, longitude }));
      dispatch(getWeather({ latitude, longitude }));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(toggleLoading(false));
  }
}