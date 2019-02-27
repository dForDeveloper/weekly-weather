import { getUserIP } from '../getUserIP';
import { getWeather } from '../getWeather';
import { reverseGeocode } from '../reverseGeocode';
import * as api from '../../utils/api';
import { setCoordinates, setError, toggleLoading } from '../../actions';

jest.mock('../../thunks/getWeather.js');
jest.mock('../../thunks/reverseGeocode.js');

describe('getUserIP', () => {
  const latitude = 39.6796;
  const longitude = -104.9626;
  const mockCoordinates = { latitude, longitude };
  const mockDispatch = jest.fn();
  const thunk = getUserIP(mockCoordinates);
  api.fetchData = jest.fn(() => ({ latitude, longitude }));

  it('should call dispatch with toggleLoading as true', async () => {
    const expected = toggleLoading(true);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call fetchData with the correct param', async () => {
    const url = 'https://weekly-weather.herokuapp.com/api/v1/ip';
    await thunk(mockDispatch);
    expect(api.fetchData).toHaveBeenCalledWith(url);
  });

  it('should call dispatch with setCoordinates with the correct params', async () => {
    const expected = setCoordinates(mockCoordinates);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with reverseGeocode with the correct params', async () => {
    const expected = reverseGeocode(mockCoordinates);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with getWeather with the correct params', async () => {
    const expected = getWeather(mockCoordinates);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setError with an empty string', async () => {
    const expected = setError('');
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with toggleLoading as false', async () => {
    const expected = toggleLoading(false);
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