import { connect } from "react-redux";
import NewCustomerComponent from "../components/NewCustomer";
import { addCustomer } from "../actions/actions_customers";

const mapDispatchToProps = (dispatch, ownProps) => {
  return { addCustomer: data => {
      return dispatch(addCustomer(data));
    } };
};

const NewCustomer = connect(null, mapDispatchToProps)(NewCustomerComponent);

export default NewCustomer;
