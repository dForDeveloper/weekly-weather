import { forwardGeocode } from '../forwardGeocode';
import { getWeather } from '../getWeather';
import * as api from '../../utils/api';
import { setCoordinates, setCity, setError, toggleLoading } from '../../actions';

jest.mock('../../thunks/getWeather.js');

describe('forwardGeocode', () => {
  const mockCoordinates = { latitude: 39.6796, longitude: -104.9626 };
  const mockData = [
    {
      geometry: { lat: 39.6796, lng: -104.9626 },
      components: { city: 'Denver', state_code: 'CO' }
    }
  ];
  const mockDispatch = jest.fn();
  const thunk = forwardGeocode('Las Vegas, NV');
  api.fetchData = jest.fn(() => mockData);

  it('should call dispatch with toggleLoading as true', async () => {
    const expected = toggleLoading(true);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call fetchData with the correct param', async () => {
    const url = 'https://weekly-weather.herokuapp.com/api/v1/forwardgeocode/Las+Vegas%2C+NV';
    await thunk(mockDispatch);
    expect(api.fetchData).toHaveBeenCalledWith(url);
  });

  it('should call dispatch with setCity with the correct param', async () => {
    const expected = setCity('Denver, CO');
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setCoordinates with the correct params', async () => {
    const expected = setCoordinates(mockCoordinates);
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