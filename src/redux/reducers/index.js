import { combineReducers } from 'redux';
import filtersReducer from './filters';
import nailsReducer from './nails';

const rootReducer = combineReducers({
  filters: filtersReducer,
  nails: nailsReducer,
});

export default rootReducer;
