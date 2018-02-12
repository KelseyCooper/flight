import { AUTHENTICATE_USER } from "../actions/actions_authenticate";

const authenticate = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authenticate;
