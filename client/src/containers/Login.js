import { connect } from "react-redux";
import LoginComponent from "../components/Login";
import { authenticateUser } from "../actions/actions_authenticate";
import { loginUserErrorTrue, loginUserErrorFalse } from "../actions/actions_errors"


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
    }
  };
};

const Login = connect(null, mapDispatchToProps)(
  LoginComponent
);

export default Login;
