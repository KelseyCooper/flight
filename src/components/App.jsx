import React, { Component } from 'react';
import Nav from './Nav'

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => console.log(error));
  }
  

  render() {
    return <div>
      <Nav />
      </div>;
  }
}

export default App;
