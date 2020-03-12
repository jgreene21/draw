import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


render() {
  const {count} = this.state
  return (
    <div>
      <h2>{count === 61 ? 'Game Over!' : `Ready! Set! Draw! ${count}`}</h2>
    </div>
  )
}

componentDidMount(){
    this.myInterval = setInterval(()=>{
      this.setState(prevState =>({
        count: prevState.count + 1
     }))
    }, 1000)
  }

componentDidUpdate(prevprops, prevState){
  if (prevState.count === 61) {
    clearInterval(this.myInterval);
    this.setState({count: 0})
  }
}


componentWillUnmount(){
  clearInterval(this.myInterval)
  }
}


export default Timer; 