import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
      const draw = drawChromeBoiAtCoords
      const y = event.clientY
      const x = event.clientX
      
      draw(x, y)
    
  }
  
  handleClick(event){
    toggleCycling()
  }
  
  handleResize(event){
    if(event.key === "a"){
      resize("+")
    }else if(event.key === "s"){
      resize("-")
    }
  }
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleResize}
        onClick={this.handleClick} 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
