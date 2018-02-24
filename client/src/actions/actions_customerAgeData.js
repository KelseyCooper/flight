export const CUSTOMERS_AGE_DATA_FETCHED = "CUSTOMERS_AGE_DATA_FETCHED";

export function fetchCustomerAgeData() {
  return dispatch => {
    return fetch("http://localhost:3001/age-data", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadCustomerAgeData(json));
      })
      .catch(error => console.log(error));
  };
}

export function loadCustomerAgeData(results) {
  return {
    type: CUSTOMERS_AGE_DATA_FETCHED,
    data: results.datasets[0].data,
    background: results.datasets[0].backgroundColor,
    labels: results.labels,
    info: results.info
  };
}
