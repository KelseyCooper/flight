import { combineReducers } from "redux";

import customers from './reducers_customers'
import customersColorData from './reducers_customerColorData'

const rootReducers = combineReducers({
  customers,
  customersColorData,
});

export default rootReducers;