import axios from 'axios';
export const CUSTOMERS_FETCHED = "CUSTOMERS_FETCHED";
export const NEW_CUSTOMER = "NEW_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";

export function fetchCustomers() {
  return dispatch => {
    return fetch(
        "http://localhost:3001/customers", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    )
      .then(response => response.json())
      .then(json => {
        dispatch(loadCustomers(json));
      })
      .catch(error => console.log(error));
  };
}

export function addCustomer(data) {
  return dispatch => {
    return axios.post("http://localhost:3001/new-customer", data)
  };
}



export function loadCustomers(results) {
  return {
    type: CUSTOMERS_FETCHED,
    payload: results
  };
}