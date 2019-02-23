import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  error: errorReducer
});

export default rootReducer;