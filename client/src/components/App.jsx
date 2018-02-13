import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';

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
        <Main />
      </div>;
  }
}

export default App;
