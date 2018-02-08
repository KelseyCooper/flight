import { CUSTOMERS_FETCHED } from "../actions/actions_customers";

const customers = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customers;
