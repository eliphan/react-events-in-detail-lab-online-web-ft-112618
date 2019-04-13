// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends Component {

  handleMouseMovement = (event) => {
    const newMouseMovement = this.props.onReceiveCoordinates
    this.setState ({
      mouseCoordinates: newMouseMovement
    })
  }
  
  render() {
    return(
      <button onClick={this.handleMouseMovement}>Click Me</button>
      )
  }
}