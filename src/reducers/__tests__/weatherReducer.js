import { weatherReducer } from '../weatherReducer';

describe('weatherReducer', () => {
  it('should return initial state by default', () => {
    const result = weatherReducer(undefined, {});
    expect(result).toEqual({});
  });

  it('should return weather when the action type is SET_WEATHER', () => {
    const mockState = {
      currently: { temperature: 55 }
    }
    const mockWeather = {
      currently: { temperature: 39 }
    }
    const mockAction = {
      type: 'SET_WEATHER',
      weather: mockWeather
    }
    const result = weatherReducer(mockState, mockAction);
    expect(result).toEqual(mockWeather);
  });
});