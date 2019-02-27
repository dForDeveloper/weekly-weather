import { setCoordinates, setError, toggleLoading } from '../actions';
import { reverseGeocode } from '../thunks/reverseGeocode';
import { getWeather } from '../thunks/getWeather';

export const getWeatherByGeolocation = ({ latitude, longitude }) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    try{
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