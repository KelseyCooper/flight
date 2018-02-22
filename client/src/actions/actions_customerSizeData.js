export const CUSTOMERS_SIZE_DATA_FETCHED = "CUSTOMERS_SIZE_DATA_FETCHED";

export function fetchCustomerSizeData() {
  return dispatch => {
    return fetch("http://localhost:3001/size-data", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadCustomerSizeData(json));
      })
      .catch(error => console.log(error));
  };
}

export function loadCustomerSizeData(results) {
  return {
    type: CUSTOMERS_SIZE_DATA_FETCHED,
    payload: results
  };
}