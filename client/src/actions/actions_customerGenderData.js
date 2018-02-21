export const CUSTOMERS_GENDER_DATA_FETCHED = "CUSTOMERS_GENDER_DATA_FETCHED";

export function fetchCustomersGenderData() {
         return dispatch => {
           return fetch("http://localhost:3001/gender-data", {
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
  return { type: CUSTOMERS_GENDER_DATA_FETCHED, payload: results };
}
