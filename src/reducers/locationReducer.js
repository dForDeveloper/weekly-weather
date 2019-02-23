export const initialState = {
  latitude: null,
  longitude: null,
  city: ''
}

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COORDINATES':
      const { latitude, longitude } = action;
      return { ...state, latitude, longitude };
    case 'SET_CITY':
      const { city } = action;
      return { ...state, city };    
    default:
      return state;
  }
}