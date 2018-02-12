export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export function authenticateUser(auth) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `email=${auth.email}&password=${auth.password}`
    }
    
         return dispatch => {
           return fetch("http://localhost:3001/users", config)
             .then(response => response.json())
             .then(json => {
               dispatch(loadCustomers(json));
             })
             .catch(error => console.log(error));
         };
       }

export function loadCustomers(results) {
  return {
    type: AUTHENTICATE_USER,
    payload: results
  };
}
