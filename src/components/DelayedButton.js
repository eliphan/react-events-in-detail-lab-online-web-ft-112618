// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    this.props.onDelayedClick();
    })
  }
  
  render() {
    return(
      <button onClick={this.handleMouseMovement}>Click Me</button>
      )
  }
}