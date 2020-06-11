import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

class Canvas extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
  }
  render() {
    return (
      <div>
          <span>{`<CanvasDraw loadTimeOffset={10} />`}</span>
        <div>
          <button style={style.button}
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            CLEAR
          </button>
          <button style={style.button}
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            UNDO
          </button>
        </div>
        <CanvasDraw style={{height: "900px", width: "2000px"}}
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
      </div>
    );
  }
}

const style = {
  button: {
    margin: "20px",
    borderRadius: "20px",
    height: "35px",
    width: "70px",
    cursor: "pointer"
  }
}
 export default Canvas