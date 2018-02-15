export const ORDER_NUMBER = "ORDER_NUMBER";

export function ChangeOrderNum(num) {
  return { type: ORDER_NUMBER, payload: num };
}
