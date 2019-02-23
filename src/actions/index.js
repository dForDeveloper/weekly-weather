export const setCoordinates = ({ latitude, longitude }) => ({
  type: 'SET_COORDINATES',
  latitude,
  longitude
});

export const setCity = (city) => ({
  type: 'SET_CITY',
  city
})

export const setWeather = (weather) => ({
  type: 'SET_WEATHER',
  weather
});

export const setError = (message) => ({
  type: 'SET_ERROR',
  message
})