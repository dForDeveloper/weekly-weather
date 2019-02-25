export const cleanData = (weather) => {
  const { temperature, apparentTemperature, summary } = weather.currently;
  const { minTemp, maxTemp } = weather.daily.data.reduce((acc, day) => {
    acc.minTemp = Math.round(Math.min(acc.minTemp, day.temperatureLow));
    acc.maxTemp = Math.round(Math.max(acc.maxTemp, day.temperatureHigh));
    return acc;
  }, { minTemp: 200, maxTemp: -200});
  const week = getWeekForecast(weather.daily.data);
  const firstDay = week.shift();
  const today = {
    ...firstDay,
    summary,
    temperature: Math.round(temperature),
    feelsLike: Math.round(apparentTemperature)
  };
  return { today, week, minTemp, maxTemp };
}

export const getWeekForecast = (data) => {
  return data.map(forecast => {
    const {
      summary,
      icon,
      precipType,
      precipProbability,
      time,
      temperatureLow,
      temperatureHigh,
      sunriseTime,
      sunsetTime,
      windSpeed,
      windBearing,
      humidity
    } = forecast;
    return {
      summary,
      icon,
      precipType,
      precipProbability: Math.round(precipProbability * 100) + '%',
      day: (new Date(time * 1000).toDateString().slice(0,3)),
      low: Math.round(temperatureLow),
      high: Math.round(temperatureHigh),
      sunrise: (new Date(sunriseTime * 1000))
        .toLocaleTimeString('en-US').replace(/:\d+/, ''),
      sunset: (new Date(sunsetTime * 1000))
        .toLocaleTimeString('en-US').replace(/:\d+/, ''),
      wind: Math.round(windSpeed) + ' mph ' + getWindDirection(windBearing),
      humidity: Math.round(humidity * 100) + '%'
    }
  });
}

export const getWindDirection = (windBearing) => {
  switch (Math.round(windBearing / 22.5) % 16) {
    case 0: return 'N';
    case 1: return 'NNE';
    case 2: return 'NE';
    case 3: return 'ENE';
    case 4: return 'E';
    case 5: return 'ESE';
    case 6: return 'SE';
    case 7: return 'SSE';
    case 8: return 'S';
    case 9: return 'SSW';
    case 10: return 'SW';
    case 11: return 'WSW';
    case 12: return 'W';
    case 13: return 'WNW';
    case 14: return 'NW';
    case 15: return 'NNW';
    default: return undefined;
  }
}