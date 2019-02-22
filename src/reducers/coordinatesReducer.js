export const coordinatesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COORDINATES':
      const { latitude, longitude } = action;
      return { latitude, longitude };
    default:
      return state;
  }
}