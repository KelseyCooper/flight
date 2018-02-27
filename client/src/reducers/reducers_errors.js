import {
  NEW_CUSTOMER_ERROR,
  EDIT_CUSTOMER_ERROR,
  LOGIN_USER_BLANK_ERROR,
  LOGIN_INVALID_USER_ERROR,
  LOGIN_PASSWORD_ERROR
} from "../actions/actions_errors";

const initialState = {
  newCustomerError: false,
  editCustomerError: false,
  loginUserErrorBlankField: false,
  loginInvalidUserError: false,
  loginPasswordError: false
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CUSTOMER_ERROR:
      return {
        ...state,
        newCustomerError: action.payload
      };
    case EDIT_CUSTOMER_ERROR:
      return {
        ...state,
        editCustomerError: action.payload
      };
    case LOGIN_USER_BLANK_ERROR:
      return {
        ...state,
        loginUserErrorBlankField: action.payload
      };
    case LOGIN_INVALID_USER_ERROR:
      return {
        ...state,
        loginInvalidUserError: action.payload
      };
    case LOGIN_PASSWORD_ERROR:
      return {
        ...state,
        loginPasswordError: action.payload
      }
    default:
      return state;
  }
};

export default error;
