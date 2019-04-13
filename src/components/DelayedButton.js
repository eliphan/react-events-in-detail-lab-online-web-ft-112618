// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {

  
  handleClick = (event) => {
    
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Click Me</button>
      )
  }
}

  handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
