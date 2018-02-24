import { CUSTOMERS_AGE_DATA_FETCHED } from "../actions/actions_customerAgeData";

const initialState = {
  data: []
}

const customersAgeData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_AGE_DATA_FETCHED:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};

export default customersAgeData;
