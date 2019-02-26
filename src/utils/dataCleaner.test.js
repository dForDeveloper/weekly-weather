import * as cleaner from './dataCleaner';
import * as mockData from './mockData';

describe('getGraphData', () => {
  it('should return an array with a single object', () => {
    Math.round = jest.fn(() => 56)
    const result = cleaner.getGraphData(mockData.mockHours);
    expect(result).toEqual(mockData.expectedHours);
  });
});

describe('getWindDirection', () => {
  it('should return 1 of 16 directions given a number between 0 and 360', () => {
    Math.round = jest.fn((num) => {
      if (num - parseInt(num) >= 0.5) return parseInt(num + 1);
      return parseInt(num);
    });
    expect(cleaner.getWindDirection(0)).toEqual('N');
    expect(cleaner.getWindDirection(23)).toEqual('NNE');
    expect(cleaner.getWindDirection(46)).toEqual('NE');
    expect(cleaner.getWindDirection(69)).toEqual('ENE');
    expect(cleaner.getWindDirection(92)).toEqual('E');
    expect(cleaner.getWindDirection(115)).toEqual('ESE');
    expect(cleaner.getWindDirection(138)).toEqual('SE');
    expect(cleaner.getWindDirection(161)).toEqual('SSE');
    expect(cleaner.getWindDirection(184)).toEqual('S');
    expect(cleaner.getWindDirection(207)).toEqual('SSW');
    expect(cleaner.getWindDirection(230)).toEqual('SW');
    expect(cleaner.getWindDirection(253)).toEqual('WSW');
    expect(cleaner.getWindDirection(276)).toEqual('W');
    expect(cleaner.getWindDirection(299)).toEqual('WNW');
    expect(cleaner.getWindDirection(322)).toEqual('NW');
    expect(cleaner.getWindDirection(345)).toEqual('NNW');
    expect(cleaner.getWindDirection(NaN)).toEqual(undefined);
  });
});

describe('getWeekForecast', () => {
  it('should return an array of forecast objects', () => {
    const result = cleaner.getWeekForecast(mockData.mockWeek);
    expect(result).toEqual(mockData.expectedWeek);
  });
});

describe('cleanData', () => {
  it('should return an object with the correct properties', () => {
    Math.round = jest.fn(num => num);
    const result = cleaner.cleanData(mockData.mockWeather);
    expect(result).toEqual(mockData.expectedWeather);
  });
});