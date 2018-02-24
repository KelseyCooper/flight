import { connect } from "react-redux";
import AllDataComponent from "../components/AllData";
import { fetchCustomers, deleteCustomer } from "../actions/actions_customers";

const mapStateToProps = state => {
  return {
    customers: state.customers.customers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomers: () => {
      dispatch(fetchCustomers());
    },
    deleteCustomer: (id) => {
      dispatch(deleteCustomer(id));
    }
  };
};

const AllData = connect(mapStateToProps, mapDispatchToProps)(
  AllDataComponent
);

export default AllData;
