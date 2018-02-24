import { CUSTOMERS_FETCHED } from "../actions/actions_customers";

const customers = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMERS_FETCHED:
      return Object.assign({}, state, action.payload)
    default:
    console.log('returning state');
    
      return state;
  }
};

export default customers;
