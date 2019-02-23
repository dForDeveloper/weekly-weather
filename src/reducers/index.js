import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  error: errorReducer,
  isLoading: isLoadingReducer
});

export default rootReducer;