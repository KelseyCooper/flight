export const NEW_CUSTOMER_ERROR_TRUE = "NEW_CUSTOMER_ERROR_TRUE";
export const NEW_CUSTOMER_ERROR_FALSE = "NEW_CUSTOMER_ERROR_FALSE";
export const EDIT_CUSTOMER_ERROR_TRUE = "EDIT_CUSTOMER_ERROR_TRUE";
export const EDIT_CUSTOMER_ERROR_FALSE = "EDIT_CUSTOMER_ERROR_FALSE";
export const LOGIN_USER_BLANK_ERROR = "LOGIN_USER_BLANK_ERROR";
export const LOGIN_INVALID_USER_ERROR = "LOGIN_INVALID_USER_ERROR";
export const LOGIN_PASSWORD_ERROR = "LOGIN_PASSWORD_ERROR";

export function newCustomerErrorTrue() {
  return { type: NEW_CUSTOMER_ERROR_TRUE };
}

export function newCustomerErrorFalse() {
  return { type: NEW_CUSTOMER_ERROR_FALSE };
}

export function editCustomerErrorTrue() {
  return { type: EDIT_CUSTOMER_ERROR_TRUE };
}

export function editCustomerErrorFalse() {
  return { type: EDIT_CUSTOMER_ERROR_FALSE };
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
  }
}