import { CUSTOMERS_GENDER_DATA_FETCHED } from "../actions/actions_customerGenderData";

const initialState = {
  datasets: [],
  info: [],
  labels: []
}

const customersGenderData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_GENDER_DATA_FETCHED:
      return {
        ...state,
        datasets: action.payload.datasets,
        info: action.payload.info,
        labels: action.payload.labels
      };
    default:
      return state;
  }
};

export default customersGenderData;
