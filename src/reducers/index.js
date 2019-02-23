import { combineReducers } from 'redux';
import { coordinatesReducer } from './coordinatesReducer';
import { weatherReducer } from './weatherReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
  weather: weatherReducer,
  error: errorReducer
});

export default rootReducer;