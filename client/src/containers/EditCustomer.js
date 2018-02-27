import { connect } from "react-redux";
import EditCustomerComponent from "../components/EditCustomer";
import { editCustomer, fetchCustomer } from "../actions/actions_customers";
import { ChangeEditOrderNum} from "../actions/actions_editorders";
import { editCustomerError } from "../actions/actions_errors"

const mapStateToProps = (state, ownProps) => {
  return {
    customer: state.customer,
    amount: state.orderAmount.amount,
    errors: state.errors
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
    editCustomerError: (bool) => {
      return dispatch(editCustomerError(bool));
    }
  };
};

const EditCustomer = connect(mapStateToProps, mapDispatchToProps)(
  EditCustomerComponent
);

export default EditCustomer;
