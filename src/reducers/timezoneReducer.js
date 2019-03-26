const initialState = {
  userOffset: null,
  cityOffset: null
};

export const timezoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_TIMEZONE':
      return { ...state, userOffset: action.offset, cityOffset: action.offset };
    case 'SET_CITY_TIMEZONE':
      return { ...state, cityOffset: action.offset };
    default:
      return state;
  }
}