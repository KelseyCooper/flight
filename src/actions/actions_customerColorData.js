export const CUSTOMERS_COLOR_DATA_FETCHED = "CUSTOMERS_COLOR_DATA_FETCHED";

export function fetchCustomerColorData() {
  return dispatch => {
    return fetch("http://localhost:3001/color-count", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadCustomerColorData(json));
      })
      .catch(error => console.log(error));
  };
}

export function loadCustomerColorData(results) {
  return {
    type: CUSTOMERS_COLOR_DATA_FETCHED,
    payload: results
  };
}
