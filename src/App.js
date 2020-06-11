import React from 'react';
import { Grid, Image, Button } from "semantic-ui-react";
import './App.css';
import Timer from './Timer';
import Canvas from './Canvas';
import SandTimer from "./sandtimer.svg"


class App extends React.Component {
  state = { startTimer: false, };

  toggleStartTimer = () => {
    this.setState( state => {
      return { startTimer: !state.startTimer, };
    })
  }

  render(){
    const { startTimer} = this.state
  return (
    <div className="App">
      <Grid centered style={{marginTop: "40px"}}>
        <Grid.Column width={3}>
          <Image src={SandTimer} className= "filter-white" style={{height: "80px", marginTop: "-30px", marginLeft: "300px"}}/>
        </Grid.Column>
        <Grid.Column width={9}>
          <header className="App-header">Pictionary</header>
        </Grid.Column>
        <Grid.Column width={3}>
          <img src={SandTimer} className= "filter-white" style={{height: "80px", marginTop: "-30px", marginLeft: "-130px"}}/>
        </Grid.Column>
      </Grid>
      <hr />
    <h3>Use the interactive canvas to draw your picture. But be quick. Your 
      <br/>friends only have one minute to guess what you're drawing!
    </h3>
    <h2>Ready! Set! Draw!</h2>
    { this.state.startTimer && <Timer/> }
    <Button style={style.button} onClick={this.toggleStartTimer}>
      {startTimer ? 'Stop Game' : 'Start Game'}
    </Button>
    <Canvas/>
    </div>
    ); 
  }
};

const style = {
  button: {
    backgroundColor: "#FFB6C1",
    cursor: "pointer"
  }
}

export default App;
