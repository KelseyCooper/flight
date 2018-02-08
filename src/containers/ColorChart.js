import { connect } from "react-redux";
import ColorChartComponent from "../components/ColorChart";
import { fetchCustomers } from "../actions/actions_customers"

const mapStateToProps = state => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { fetchCustomers: () => {
        dispatch(fetchCustomers());
      } };
}

const ColorChart = connect(mapStateToProps, mapDispatchToProps)(ColorChartComponent);

export default ColorChart;
