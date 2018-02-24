import { CUSTOMER_PURCHASE_FETCHED } from "../actions/actions_customers";

const initialState = {
  customerData: []
}

const customerPurchases = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_PURCHASE_FETCHED:
      return { ...state, customerData: action.payload };
    default:
      return state;
  }
};

export default customerPurchases;
