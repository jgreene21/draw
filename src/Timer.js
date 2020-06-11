import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60
    }
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === 0) {
      this.setState({ count: 60 })
    }
    console.log("updated")
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>{count === 0 ? 'Game Over!' : `Ready! Set! Draw!`}
        <br/> {count}</h1>
      </div>
    )
  }
};


export default Timer; 