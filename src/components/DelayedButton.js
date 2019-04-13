// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    this.props.onDelayedClick();
    this.props.delay
    })
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Click Me</button>
      )
  }
}