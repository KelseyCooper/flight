import { connect } from "react-redux";
import AllDataComponent from "../components/AllData";
import { fetchCustomers } from "../actions/actions_customers";

const mapStateToProps = state => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomers: () => {
      dispatch(fetchCustomers());
    }
  };
};

const AllData = connect(mapStateToProps, mapDispatchToProps)(
  AllDataComponent
);

export default AllData;
