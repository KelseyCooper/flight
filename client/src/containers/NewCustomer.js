import { connect } from "react-redux";
import NewCustomerComponent from "../components/NewCustomer";
import { addCustomer } from "../actions/actions_customers";
import { ChangeOrderNum } from "../actions/actions_newcustomer";
import { newCustomerErrorTrue } from "../actions/actions_errors"

const mapStateToProps = (state) => {
  return {
    purchasing: state.orderNum.order
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { addCustomer: data => {
      return dispatch(addCustomer(data));
    }, ChangeOrderNum: data => {
      return dispatch(ChangeOrderNum(data));
    }, newCustomerErrorTrue: () => {
      return dispatch(newCustomerErrorTrue());
    }
     
  };
};

const NewCustomer = connect(mapStateToProps, mapDispatchToProps)(NewCustomerComponent);

export default NewCustomer;
