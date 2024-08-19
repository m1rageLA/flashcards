import { combineReducers } from '@reduxjs/toolkit';
import someReducer from '../features/someFeature';

const rootReducer = combineReducers({
  someFeature: someReducer,
});

export default rootReducer;
