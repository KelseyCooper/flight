import { connect } from "react-redux";
import ColorChartComponent from "../components/ColorChart";
import { fetchCustomerColorData } from "../actions/actions_customerColorData";

const mapStateToProps = state => {
  return {
    data: state.customersColorData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { fetchCustomerColorData: () => {
        dispatch(fetchCustomerColorData());
      } };
}

const ColorChart = connect(mapStateToProps, mapDispatchToProps)(ColorChartComponent);

export default ColorChart;
