import { connect } from "react-redux";
import EditCustomerComponent from "../components/EditCustomer";
import { editCustomer, fetchCustomer } from "../actions/actions_customers";

const mapStateToProps = (state, ownProps) => {
  return {
    customer: state.customer,
    customerPurchases: state.customerPurchases
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editCustomer: data => {
      return dispatch(editCustomer(data));
    },
    fetchCustomer: id => {
      return dispatch(fetchCustomer({ id: ownProps.match.params.id} ));
    }
  };
};

const EditCustomer = connect(mapStateToProps, mapDispatchToProps)(
  EditCustomerComponent
);

export default EditCustomer;
