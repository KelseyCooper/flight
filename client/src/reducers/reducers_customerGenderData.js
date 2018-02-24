import { CUSTOMERS_GENDER_DATA_FETCHED } from "../actions/actions_customerGenderData";

const initialState = {
  data: []
}

const customersGenderData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_GENDER_DATA_FETCHED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default customersGenderData;
