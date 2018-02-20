import { EDIT_ORDER_ERROR } from "../actions/actions_editorders";

const initialState = {
  editOrderError: false
};

const orderAmount = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ORDER_ERROR:
      return { editOrderError: action.payload };
    default:
      return state;
  }
};

export default orderAmount;
