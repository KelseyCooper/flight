import { connect } from "react-redux";
import GenderChartComponent from "../components/GenderChart";
import { fetchCustomersGenderData } from "../actions/actions_customerGenderData";

const mapStateToProps = state => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomersGenderData: () => {
      dispatch(fetchCustomersGenderData());
    }
  };
};

const ColorChart = connect(mapStateToProps, mapDispatchToProps)(
  GenderChartComponent
);

export default ColorChart;