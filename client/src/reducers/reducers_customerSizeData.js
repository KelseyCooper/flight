import { CUSTOMERS_SIZE_DATA_FETCHED } from "../actions/actions_customerSizeData";

const customersSizeData = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_SIZE_DATA_FETCHED:
    
      return action.payload;
    default:
    
      return state;
  }
};

export default customersSizeData;
