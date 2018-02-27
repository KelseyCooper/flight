import axios from "axios";
export const CUSTOMERS_BEING_FETCHED = "CUSTOMERS_BEING_FETCHED";
export const CUSTOMERS_FETCHED = "CUSTOMERS_FETCHED";
export const NEW_CUSTOMER = "NEW_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const CUSTOMER_FETCHED = "CUSTOMER_FETCHED";
export const ORDER_AMOUNT = "ORDER_AMOUNT";
export const CUSTOMER_DELETED = "CUSTOMER_DELETED";

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
        dispatch(editOrderAmount(res.data[0].purchased.length));
      })
      .catch(error => console.log(error));
  };
}

export function addCustomer(data) {
  return dispatch => {
    return axios.post("http://localhost:3001/new-customer", data);
  };
}

export function editCustomer(data) {
  let bought = [];
  let finalData = {};

  finalData.name = data.name || null;
  finalData.email = data.email || null;
  finalData.gender = data.gender || null;
  finalData.age = data.age || null;
  finalData.notes = data.notes || null;
  finalData.id = data.id;
  finalData.bought = bought;

  for (let x = 0; x < data.quantity; x++) {
    bought.push({ color: data.color[x], size: data.size[x], ordernum: x + 1 });
  }

  return dispatch => {
    return axios.post("http://localhost:3001/edit-customer", finalData);
  };
}

export function deleteCustomer(id) {
  const data = { id };
  return dispatch => {
    return axios
      .post("http://localhost:3001/delete-customer", data)
      .then(res => {
        dispatch(deleteCustomerSuccess(res.data.id));
      })
      .catch(error => console.log(error));
  };
}

export function editOrderAmount(data) {
  return { type: ORDER_AMOUNT, payload: data };
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

export function deleteCustomerSuccess(id) {
  return { type: CUSTOMER_DELETED, payload: id };
}
