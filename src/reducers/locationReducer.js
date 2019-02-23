export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      const { latitude, longitude } = action;
      return { ...state, latitude, longitude };
    case 'SET_CITY':
      const { city } = action;
      return { ...state, city };    
    default:
      return state;
  }
}