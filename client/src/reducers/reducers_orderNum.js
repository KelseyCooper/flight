import { ORDER_NUMBER } from "../actions/actions_newcustomer";

const initialState = {
  order: '1'
};

const orderNum = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_NUMBER:
      return {
        ...state,
        order: action.payload
      }
    default:
      return state;
  }
};

export default orderNum;
