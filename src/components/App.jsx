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
  

  render() {
    return <div>
        <Nav />
        <div className="container">{this.state.someInfo}</div>
        <Slider />
      </div>;
  }
}

export default App;
