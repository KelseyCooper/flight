import { NEW_CUSTOMER_ERROR_TRUE, NEW_CUSTOMER_ERROR_FALSE } from "../actions/actions_errors";

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
    case NEW_CUSTOMER_ERROR_FALSE:
       return {
           ...state,
        newCustomerError: false
       }
    default:
      return state;
  }
};

export default error;
