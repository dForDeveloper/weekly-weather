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
});

export const toggleLoading = (bool) => ({
  type: 'TOGGLE_LOADING',
  isLoading: bool
});

export const setUserTimezone = (offset) => ({
  type: 'SET_USER_TIMEZONE',
  offset
});

export const setCityTimezone = (offset) => ({
  type: 'SET_CITY_TIMEZONE',
  offset
});