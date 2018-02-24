import { connect } from "react-redux";
import SizeChartComponent from "../components/SizeChart";
import { fetchCustomerSizeData } from "../actions/actions_customerSizeData";

const mapStateToProps = state => {
  return { data: state.sizeData.data };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomerSizeData: () => {
      dispatch(fetchCustomerSizeData());
    }
  };
};

const SizeChart = connect(mapStateToProps, mapDispatchToProps)(
  SizeChartComponent
);

export default SizeChart;
