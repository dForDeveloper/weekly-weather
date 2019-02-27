import { setCoordinates, setError, toggleLoading } from '../actions';
import { reverseGeocode } from '../thunks/reverseGeocode';
import { getWeather } from '../thunks/getWeather';

export const getWeatherByGeolocation = ({ latitude, longitude }) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try{
      dispatch(setCoordinates({ latitude, longitude }));
      await dispatch(reverseGeocode({ latitude, longitude }));
      await dispatch(getWeather({ latitude, longitude }));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(toggleLoading(false));
  }
}