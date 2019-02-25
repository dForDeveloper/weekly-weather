import { reverseGeocode } from '../reverseGeocode';
import * as api from '../../utils/api';
import { setCity, setError } from '../../actions';

describe('reverseGeocode', () => {
  const lat = 39.6796;
  const lon = -104.9626
  const mockCoordinates = { latitude: lat, longitude: lon };
  const mockData = [{ components: { city: 'Denver' , state_code: 'CO' } }];
  const mockDispatch = jest.fn();
  const thunk = reverseGeocode(mockCoordinates);
  api.fetchData = jest.fn(() => mockData);

  it('should call fetchData with the correct param', async () => {
    const url = `http://localhost:3001/api/v1/reversegeocode/${lat}/${lon}`;
    await thunk(mockDispatch);
    expect(api.fetchData).toHaveBeenCalledWith(url);
  });

  it('should call dispatch with setCity with the correct param', async () => {
    const expected = setCity('Denver, CO');
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setError with an empty string', async () => {
    const expected = setError('');
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setError and a message', async () => {
    api.fetchData = jest.fn(() => {
      throw Error('No results found');
    });
    const expected = setError('No results found');
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});