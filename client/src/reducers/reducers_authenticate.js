import { SET_CURRENT_USER } from "../actions/actions_authenticate";
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default:
      return state;
  }
};

export default authenticate;
