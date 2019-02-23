import { fetchData } from '../utils/api';
import { setCoordinates, setCity, setError } from '../actions';

export const forwardGeocode = (query) => {
  return async (dispatch) => {
    query = query.replace(/\s/g, '+');
    query = query.replace(/,/g, '%2C');
    try {
      const url = `http://localhost:3001/api/v1/geocode/${query}`
      const geocodeData = await fetchData(url);
      const { lat: latitude, lng: longitude } = geocodeData[0].geometry;
      dispatch(setCoordinates({ latitude, longitude }));
      let city = geocodeData[0].formatted;
      let regex = RegExp(/([A-Za-z]+(\s[A-Za-z]+)*)?,\s([A-Za-z]{2})/);
      city = city.match(regex)[0];
      dispatch(setCity(city));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}