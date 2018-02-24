import { CUSTOMERS_SIZE_DATA_FETCHED } from "../actions/actions_customerSizeData";

const initialState = {
  data: []
};

const customersSizeData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_SIZE_DATA_FETCHED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default customersSizeData;
