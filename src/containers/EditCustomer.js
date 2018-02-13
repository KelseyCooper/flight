import { connect } from "react-redux";
import EditCustomerComponent from "../components/EditCustomer";
import { editCustomer } from "../actions/actions_customers";

const mapStateToProps = (state, ownProps) => {
    const customer = state.customers.filter(function(contact) { return contact.id === Number(ownProps.match.params.id); })
  return {
    customer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editCustomer: data => {
      return dispatch(editCustomer(data));
    }
  };
};

const EditCustomer = connect(mapStateToProps, mapDispatchToProps)(
  EditCustomerComponent
);

export default EditCustomer;
