import {
  CUSTOMERS_FETCHED,
  CUSTOMERS_BEING_FETCHED,
  CUSTOMER_DELETED
} from "../actions/actions_customers";

const initialState = {
  fetching: false,
  fetched: false,
  customers: [],
  error: null
};

const customers = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_BEING_FETCHED: {
      return { ...state, fetching: true };
    }
    case CUSTOMERS_FETCHED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        customers: action.payload
      };
    }
    case CUSTOMER_DELETED: {
      return {
        customers: [
          ...state.customers.filter((item => item.id !== action.payload))
        ]
      }
    }
    default:
      return state;
  }
};

export default customers;
