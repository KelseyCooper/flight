import { ORDER_AMOUNT } from "../actions/actions_customers";
import { EDIT_ORDER_NUMBER } from '../actions/actions_editorders'

const initialState = {
  amount: '0'
};

const orderAmount = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_AMOUNT:
      return {
        ...state,
        amount: action.payload.toString()
      };
    case EDIT_ORDER_NUMBER:
      return {
        ...state,
        amount: action.payload.toString()
      }
    default:
      return state;
  }
};

export default orderAmount;
