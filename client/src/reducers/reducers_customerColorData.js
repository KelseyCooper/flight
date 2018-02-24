import { CUSTOMERS_COLOR_DATA_FETCHED } from "../actions/actions_customerColorData";

const initialState = {
  data: []
}

const customersColorData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_COLOR_DATA_FETCHED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default customersColorData;
