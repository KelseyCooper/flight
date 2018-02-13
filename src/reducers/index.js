import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import customers from './reducers_customers'
import customersColorData from './reducers_customerColorData'
import auth from './reducers_authenticate'

const rootReducers = combineReducers({
  customers,
  customersColorData,
  auth,
  form: formReducer
});

export default rootReducers;