import { locationReducer, initialState } from '../locationReducer';

describe('locationReducer', () => {
  const latitude = 39.6796;
  const longitude = -104.9626;

  it('should return initial state by default', () => {
    const expected = initialState;
    const result = locationReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with lat/lon when type is SET_COORDINATES', () => {
    const mockAction = {
      type: 'SET_COORDINATES',
      latitude,
      longitude
    }
    const mockState = {
      ...initialState,
      city: 'Denver, CO'
    }
    const expected = {
      latitude,
      longitude,
      city: 'Denver, CO'
    }
    const result = locationReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return state with city when type is SET_CITY', () => {
    const mockAction = {
      type: 'SET_CITY',
      city: 'Las Vegas, NV'
    }
    const mockState = {
      latitude,
      longitude,
      city: ''
    }
    const expected = {
      latitude,
      longitude,
      city: 'Las Vegas, NV'
    }
    const result = locationReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});