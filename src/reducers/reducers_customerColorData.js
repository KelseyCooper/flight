import { CUSTOMERS_COLOR_DATA_FETCHED } from "../actions/actions_customerColorData";

const customersColorData = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_COLOR_DATA_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customersColorData;
