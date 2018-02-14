import axios from 'axios';
export const CUSTOMERS_FETCHED = "CUSTOMERS_FETCHED";
export const NEW_CUSTOMER = "NEW_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const CUSTOMER_FETCHED = "CUSTOMER_FETCHED";

axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "application/json";

// export function fetchCustomers() {
//   return dispatch => {
//     return fetch(
//         "http://localhost:3001/customers", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//     )
//       .then(response => response.json())
//       .then(json => {
//         dispatch(loadCustomers(json));
//       })
//       .catch(error => console.log(error));
//   };
// }

export function fetchCustomers() {
  const headers = { "Content-Type": "application/json" };
  return dispatch => {
    return axios
      .get("http://localhost:3001/customers", headers)
      .then(res => {
        dispatch(loadCustomers(res.data));
      })
      .catch(error => console.log(error));
  };
}

export function fetchCustomer(id) {
  const headers = { "Content-Type": "application/json" };
  return dispatch => {
    return axios
      .post("http://localhost:3001/fetch-customer", id, headers)
      .then(res => {
        dispatch(loadCustomer(res.data[0]));
      })
      .catch(error => console.log(error));
  };
}

export function addCustomer(data) {
  return dispatch => {
    return axios.post("http://localhost:3001/new-customer", data)
  };
}

export function editCustomer(data) {
  return dispatch => {
    return axios.post("http://localhost:3001/edit-customer", data)
  };
}

export function loadCustomers(results) {
  return {
    type: CUSTOMERS_FETCHED,
    payload: results
  };
}

export function loadCustomer(results) {
  return {
    type: CUSTOMER_FETCHED,
    payload: results
  };
}