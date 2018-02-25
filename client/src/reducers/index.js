import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import customers from './reducers_customers';
import customer from "./reducers_customer";
import customersColorData from './reducers_customerColorData';
import auth from './reducers_authenticate';
import orderNum from './reducers_orderNum';
import orderAmount from './reducers_orderAmount';
//TODO Remove all the editOrderError 
import editOrderError from './reducers_editOrderError';
import ageData from './reducers_customAgeData';
import genderData from './reducers_customerGenderData';
import sizeData from './reducers_customerSizeData';
import errors from './reducers_errors'

const rootReducers = combineReducers({
  customers,
  customer,
  customersColorData,
  auth,
  form: formReducer,
  orderNum,
  orderAmount,
  editOrderError,
  ageData,
  genderData,
  sizeData,
  errors

});

export default rootReducers;