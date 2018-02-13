import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import customers from './reducers_customers'
import customer from "./reducers_customer";
import customersColorData from './reducers_customerColorData'
import auth from './reducers_authenticate'

const rootReducers = combineReducers({
  customers,
  customer,
  customersColorData,
  auth,
  form: formReducer
});

export default rootReducers;