import React, { Component } from 'react';
import Nav from './Nav'
import Slider from './Slider'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someInfo: ''
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({someInfo: json.title})
      })
      .catch(error => console.log(error))
  }
  

  render() {
    return <div>
        <Nav />
        <div className="container">{this.state.someInfo}</div>
        <Slider />
      </div>;
  }
}

export default App;
