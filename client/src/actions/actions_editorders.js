export const EDIT_ORDER_NUMBER = "EDIT_ORDER_NUMBER";
export const EDIT_ORDER_ERROR = "EDIT_ORDER_ERROR";

export function ChangeEditOrderNum(num) {
  return { type: EDIT_ORDER_NUMBER, payload: num };
}

export function EditOrderError(val) {
  return dispatch => {
    dispatch({ type: EDIT_ORDER_ERROR, payload: val });
  }
}
