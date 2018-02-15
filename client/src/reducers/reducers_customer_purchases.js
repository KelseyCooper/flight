import { CUSTOMER_PURCHASE_FETCHED } from "../actions/actions_customers";

const customerPurchases = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_PURCHASE_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customerPurchases;
