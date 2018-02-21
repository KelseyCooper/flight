import { CUSTOMERS_GENDER_DATA_FETCHED } from "../actions/actions_customerGenderData";

const customersGenderData = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_GENDER_DATA_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default customersGenderData;
