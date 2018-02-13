import {
  CUSTOMER_FETCHED
} from "../actions/actions_customers";

const customer = (state = [], action) => {
  switch (action.type) {
    case CUSTOMER_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customer;
