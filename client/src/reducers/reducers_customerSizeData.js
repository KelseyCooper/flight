import { CUSTOMERS_SIZE_DATA_FETCHED } from "../actions/actions_customerSizeData";

const initialState = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [],
    hoverBackgroundColor: [],
    labels: []
  }],
  info: []
};

const customersSizeData = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_SIZE_DATA_FETCHED:
      return {
        ...state,
        datasets: [
          {
            data: action.data,
            backgroundColor: action.background,
            hoverBackgroundColor: action.hoverBackground
          }
        ],
        labels: action.labels,
        info: action.info
      };
    default:
      return state;
  }
};

export default customersSizeData;
