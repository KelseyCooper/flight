export const NEW_CUSTOMER_ERROR_TRUE = "NEW_CUSTOMER_ERROR_TRUE";
export const NEW_CUSTOMER_ERROR_FALSE = "NEW_CUSTOMER_ERROR_FALSE";
export const EDIT_CUSTOMER_ERROR_TRUE = "EDIT_CUSTOMER_ERROR_TRUE";
export const EDIT_CUSTOMER_ERROR_FALSE = "EDIT_CUSTOMER_ERROR_FALSE";
export const LOGIN_USER_BLANK_ERROR_TRUE = "LOGIN_USER_BLANK_ERROR_TRUE";
export const LOGIN_USER_BLANK_ERROR_FALSE = "LOGIN_USER_BLANK_ERROR_FALSE";
export const LOGIN_INVALID_USER_ERROR = "LOGIN_INVALID_USER_ERROR";

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

export function loginUserErrorTrue() {
  return { type: LOGIN_USER_BLANK_ERROR_TRUE };
}

export function loginUserErrorFalse() {
  return { type: LOGIN_USER_BLANK_ERROR_FALSE };
}

export function loginInvalidUserError(res) {
  return {
    type: LOGIN_INVALID_USER_ERROR,
    payload: res
  };
}
