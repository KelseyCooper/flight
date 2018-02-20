import { connect } from "react-redux";
import EditCustomerComponent from "../components/EditCustomer";
import { editCustomer, fetchCustomer } from "../actions/actions_customers";
import { ChangeEditOrderNum, EditOrderError } from "../actions/actions_editorders";

const mapStateToProps = (state, ownProps) => {
  return {
    customer: state.customer,
    amount: state.orderAmount.amount,
    error: state.editOrderError.editOrderError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editCustomer: data => {
      return dispatch(editCustomer(data));
    },
    fetchCustomer: id => {
      return dispatch(fetchCustomer({ id: ownProps.match.params.id }));
    },
    ChangeEditOrderNum: data => {
      return dispatch(ChangeEditOrderNum(data));
    },
    EditOrderError: val => {
      return dispatch(EditOrderError(val));
    }
  };
};

const EditCustomer = connect(mapStateToProps, mapDispatchToProps)(
  EditCustomerComponent
);

export default EditCustomer;
