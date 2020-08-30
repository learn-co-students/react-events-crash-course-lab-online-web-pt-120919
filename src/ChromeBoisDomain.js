import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (onMouseMove) => {

drawChromeBoiAtCoords(onMouseMove.clientX, onMouseMove.clientY)

    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }

  handleKey = (key) => {
    if(key.key === "a"){ 
      resize("+")}
      else if(key.key === "s"){
        resize("-")
      }
  }

  
  render() {
    return (
      <canvas 
        onKeyDown={this.handleKey}
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
       
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }

}
