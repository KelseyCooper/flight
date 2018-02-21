import { connect } from "react-redux";
import AgeChartComponent from "../components/AgeChart";
import { fetchCustomerAgeData } from "../actions/actions_customerAgeData";

const mapStateToProps = state => {
  return { data: state.ageData };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomerAgeData: () => {
      dispatch(fetchCustomerAgeData());
    }
  };
};

const AgeChart = connect(mapStateToProps, mapDispatchToProps)(
  AgeChartComponent
);

export default AgeChart;
