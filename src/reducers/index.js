import { combineReducers } from "redux";

import customers from './reducers_customers'

const rootReducers = combineReducers({
    customers
})

export default rootReducers;