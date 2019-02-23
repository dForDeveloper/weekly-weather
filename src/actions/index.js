export const setCoordinates = ({ latitude, longitude }) => ({
  type: 'SET_COORDINATES',
  latitude,
  longitude
});

export const setWeather = (weather) => ({
  type: 'SET_WEATHER',
  weather
});