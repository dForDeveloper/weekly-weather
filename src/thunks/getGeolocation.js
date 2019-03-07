import { setCoordinates, setError, toggleLoading } from '../actions';
import { reverseGeocode } from './reverseGeocode';
import { getWeather } from './getWeather';

export const getGeolocation = ({ latitude, longitude }, history) => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    try{
      dispatch(setCoordinates({ latitude, longitude }));
      await dispatch(reverseGeocode({ latitude, longitude }, history));
      await dispatch(getWeather({ latitude, longitude }));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(toggleLoading(false));
  }
}