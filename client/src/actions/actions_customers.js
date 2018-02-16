import axios from 'axios';
export const CUSTOMERS_FETCHED = "CUSTOMERS_FETCHED";
export const NEW_CUSTOMER = "NEW_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const CUSTOMER_FETCHED = "CUSTOMER_FETCHED";
export const CUSTOMER_PURCHASE_FETCHED = "CUSTOMER_PURCHASE_FETCHED";

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
        dispatch(loadCustomerPurchase(res.data));
      })
      .catch(error => console.log(error));
  };
}

export function addCustomer(data) {
  
  let bought = [];
  let finalData = {};
  
  finalData.name = data.name || null;
  finalData.email = data.email || null;
  finalData.gender = data.gender || null;
  finalData.age = data.age || null;
  finalData.notes = data.notes || null;
  finalData.bought = bought;
  
  for (let x = 1; x <= data.quantity; x++) {
    bought.push({ color: data.color[x], size: data.size[x] });
  }

  return dispatch => {
    return axios.post("http://localhost:3001/new-customer", finalData);
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

export function loadCustomerPurchase(results) {
  return {
    type: CUSTOMER_PURCHASE_FETCHED,
    payload: results
  };
}