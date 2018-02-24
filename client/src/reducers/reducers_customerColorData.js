import { CUSTOMERS_COLOR_DATA_FETCHED } from "../actions/actions_customerColorData";

const initialState = {
  info: [],
  labels: [],
  datasets: []
}

const customersColorData = (state = initialState, action) => {
  // console.log(action.payload);
  
  switch (action.type) {
    case CUSTOMERS_COLOR_DATA_FETCHED:
    {console.log(action.payload.labels);
    }
      return {
        ...state,
        info: action.payload.info,
        labels: action.payload.labels,
        datasets: action.payload.datasets
      };
    default:
      return state;
  }
};

export default customersColorData;
