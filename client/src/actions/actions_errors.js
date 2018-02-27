export const NEW_CUSTOMER_ERROR = "NEW_CUSTOMER_ERROR";
export const EDIT_CUSTOMER_ERROR = "EDIT_CUSTOMER_ERROR";
export const LOGIN_USER_BLANK_ERROR = "LOGIN_USER_BLANK_ERROR";
export const LOGIN_INVALID_USER_ERROR = "LOGIN_INVALID_USER_ERROR";
export const LOGIN_PASSWORD_ERROR = "LOGIN_PASSWORD_ERROR";

export function newCustomerError(bool) {
  return { type: NEW_CUSTOMER_ERROR,
  payload: bool };
}

export function editCustomerError(bool) {
  return {
    type: EDIT_CUSTOMER_ERROR,
    payload: bool
  };
}

export function loginBlankError(bool) {
  return {
    type: LOGIN_USER_BLANK_ERROR,
    payload: bool
  };
}

export function loginInvalidUserError(bool) {
  return {
    type: LOGIN_INVALID_USER_ERROR,
    payload: bool
  };
}

export function loginPasswordError(bool) {
  return {
    type: LOGIN_PASSWORD_ERROR,
    payload: bool
  };
}
