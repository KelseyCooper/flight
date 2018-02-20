import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import customers from './reducers_customers'
import customer from "./reducers_customer";
import customerPurchases from './reducers_customer_purchases'
import customersColorData from './reducers_customerColorData'
import auth from './reducers_authenticate'
import orderNum from './reducers_orderNum'
import orderAmount from './reducers_orderAmount'

const rootReducers = combineReducers({
  customers,
  customer,
  customerPurchases,
  customersColorData,
  auth,
  form: formReducer,
  orderNum,
  orderAmount
});

export default rootReducers;