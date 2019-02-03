import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  onClick = e => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello React </h1>
        <h1 onClick={this.onClick}>{this.state.counter}</h1>
      </div>
    );
  }
}
