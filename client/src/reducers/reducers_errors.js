import {
  NEW_CUSTOMER_ERROR_TRUE,
  NEW_CUSTOMER_ERROR_FALSE,
  EDIT_CUSTOMER_ERROR_TRUE,
  EDIT_CUSTOMER_ERROR_FALSE,
  LOGIN_USER_BLANK_ERROR_TRUE,
  LOGIN_USER_BLANK_ERROR_FALSE,
  LOGIN_INVALID_USER_ERROR
} from "../actions/actions_errors";

const initialState = {
  newCustomerError: false,
  editCustomerError: false,
  loginUserErrorBlankField: false,
  loginInvalidUserError: false
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
      };
    case EDIT_CUSTOMER_ERROR_TRUE:
      return {
        ...state,
        editCustomerError: true
      };
    case EDIT_CUSTOMER_ERROR_FALSE:
      return {
        ...state,
        editCustomerError: false
      };
    case LOGIN_USER_BLANK_ERROR_TRUE:
      return {
        ...state,
        loginUserErrorBlankField: true
      };
    case LOGIN_USER_BLANK_ERROR_FALSE:
      return {
        ...state,
        loginUserErrorBlankField: false
      };
    case LOGIN_INVALID_USER_ERROR:
      return {
        ...state,
        loginInvalidUserError: action.payload
      };
    default:
      return state;
  }
};

export default error;
