import { getWeather } from '../getWeather';
import * as api from '../../utils/api';
import * as helper from '../../utils/dataCleaner';
import { setWeather, setError } from '../../actions';

describe('getWeather', () => {
  const lat = 39.6796;
  const lon = -104.9626;
  const mockCoordinates = { latitude: lat, longitude: lon };
  const mockWeather = { currently: { temperature: 39 } };
  const mockDispatch = jest.fn();
  const thunk = getWeather(mockCoordinates);
  api.fetchData = jest.fn(() => mockWeather);
  helper.cleanData = jest.fn(() => mockWeather);

  it('should call fetchData with the correct param', async () => {
    const url = `http://localhost:3001/api/v1/weather/${lat}/${lon}`;
    await thunk(mockDispatch);
    expect(api.fetchData).toHaveBeenCalledWith(url);
  });

  it('should call dispatch with setWeather with the correct param', async () => {
    const expected = setWeather(mockWeather);
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