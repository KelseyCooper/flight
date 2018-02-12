import { combineReducers } from "redux";

import customers from './reducers_customers'
import customersColorData from './reducers_customerColorData'
import auth from './reducers_authenticate'

const rootReducers = combineReducers({
  customers,
  customersColorData,
  auth
});

export default rootReducers;