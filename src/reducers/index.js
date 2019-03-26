import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { timezoneReducer } from './timezoneReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
  timezone: timezoneReducer
});

export default rootReducer;