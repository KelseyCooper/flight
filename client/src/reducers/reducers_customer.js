import { CUSTOMER_FETCHED } from "../actions/actions_customers";

const initialState = {
  id: 0,
  name: null,
  email: null,
  gender: null,
  age: null,
  reason_to_buy: null,
  purchased: []
};

const customer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_FETCHED:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        gender: action.payload.gender,
        age: action.payload.age,
        reason_to_buy: action.payload.reason_to_buy,
        purchased: action.payload.purchased
      };
    default:
      return state;
  }
};

export default customer;
