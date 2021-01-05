import { combineReducers } from 'redux';

import filters from './filters';
import nails from './nails';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  nails,
  cart,
});

export default rootReducer;
