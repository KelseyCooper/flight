import { CUSTOMERS_AGE_DATA_FETCHED } from "../actions/actions_customerAgeData";

const initialState = {
  datasets: [
    {
      data: [],
      backgroundColor: []
    }
  ],
  labels: [],
  info: []

};

const customersAgeData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_AGE_DATA_FETCHED:
      return {
        ...state,
        datasets: [
          {
            data: action.data,
            backgroundColor: action.background
          }
        ],
        labels: action.labels,
        info: action.info
      };
    default:
      return state;
  }
};

export default customersAgeData;
