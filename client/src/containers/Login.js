import { connect } from "react-redux";
import LoginComponent from "../components/Login";
import { authenticateUser } from "../actions/actions_authenticate";


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser: (auth) => {
      return dispatch(authenticateUser(auth));
    }
  };
};

const Login = connect(null, mapDispatchToProps)(
  LoginComponent
);

export default Login;
