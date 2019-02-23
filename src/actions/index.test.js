import * as actions from './index';

describe('setCoordinates', () => {
  it(`
    should return an action of type SET_COORDINATES with latitude and longitude
  `, () => {
    const latitude = 39.6796;
    const longitude = -104.9626;
    const expected = {
      type: 'SET_COORDINATES',
      latitude,
      longitude
    }
    const result = actions.setCoordinates({ latitude, longitude });
    expect(result).toEqual(expected);
  });
});

describe('setCity', () => {
  it('should return an action of type SET_CITY with city', () => {
    const expected = {
      type: 'SET_CITY',
      city: 'Denver, CO'
    }
    const result = actions.setCity('Denver, CO');
    expect(result).toEqual(expected);
  });
});

describe('setWeather', () => {
  it('should return an action of type SET_WEATHER with weather', () => {
    const mockWeather = {
      currently: { temperature: 39 }
    }
    const expected = {
      type: 'SET_WEATHER',
      weather: mockWeather
    }
    const result = actions.setWeather(mockWeather);
    expect(result).toEqual(expected);
  });
});

describe('setError', () => {
  it('should return an action of type SET_ERROR with error', () => {
    const expected = {
      type: 'SET_ERROR',
      message: 'No results found'
    };
    const result = actions.setError('No results found');
    expect(result).toEqual(expected);
  });
});

describe('toggleLoading', () => {
  it('should return and action of type TOGGLE_LOADING with isLoading', () => {
    const expected = {
      type: 'TOGGLE_LOADING',
      isLoading: true
    }
    const result = actions.toggleLoading(true);
    expect(result).toEqual(expected);
  });
});