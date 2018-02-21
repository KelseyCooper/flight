import { CUSTOMERS_AGE_DATA_FETCHED } from "../actions/actions_customerAgeData";

const customersAgeData = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_AGE_DATA_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customersAgeData;
