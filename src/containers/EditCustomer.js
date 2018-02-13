import { connect } from "react-redux";
import EditCustomerComponent from "../components/EditCustomer";
// import { fetchCustomerColorData } from "../actions/actions_customerColorData";

const mapStateToProps = (state, ownProps) => {
    const customer = state.customers.filter(function(contact) { return contact.id === Number(ownProps.match.params.id); })
  return {
    customer,
  };
};

const EditCustomer = connect(mapStateToProps)(
  EditCustomerComponent
);

export default EditCustomer;
