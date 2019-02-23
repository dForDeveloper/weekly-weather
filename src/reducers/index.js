import { combineReducers } from 'redux';
import { coordinatesReducer } from './coordinatesReducer';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
  weather: weatherReducer
});

export default rootReducer;