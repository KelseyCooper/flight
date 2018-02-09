import { connect } from "react-redux";
import AgeChartComponent from "../components/AgeChart";
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

const AgeChart = connect(mapStateToProps, mapDispatchToProps)(
  AgeChartComponent
);

export default AgeChart;
