import { connect } from "react-redux";
import LoginComponent from "../components/Login";
import { authenticateUser } from "../actions/actions_authenticate";
import { loginUserErrorTrue, loginUserErrorFalse, loginInvalidUserError, loginPasswordError } from "../actions/actions_errors"

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser: (auth) => {
      return dispatch(authenticateUser(auth));
    },
    loginUserErrorTrue: () => {
      return dispatch(loginUserErrorTrue());
    },
    loginUserErrorFalse: () => {
      return dispatch(loginUserErrorFalse());
    },
    loginInvalidUserError: (bool) => {
      return dispatch(loginInvalidUserError(bool));
    },
    loginPasswordError: (bool) => {
      return dispatch(loginPasswordError(bool));
    }
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(
  LoginComponent
);

export default Login;
