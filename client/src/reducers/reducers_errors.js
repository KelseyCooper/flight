import { NEW_CUSTOMER_ERROR_TRUE } from "../actions/actions_errors";

const initialState = {
  newCustomerError: false
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CUSTOMER_ERROR_TRUE:
      return { 
          ...state,
        newCustomerError: true            
       };
    default:
      return state;
  }
};

export default error;
