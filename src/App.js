import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

const NumberColumn = (props) => {
  const column = props.numberColumn.map( (num) => {
    return(
      (num===props.currentNumber) ? <span><b>{num}</b><br /></span> : <span>{num}<br /></span>
    )
  })
  return(
    <div id="numberColumn">
      {column}
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: 10,
      numberColumn: []
    }
  }
  componentWillMount() {
    let numberColumn = [];
    for(let i = -3; i < 4; i++) {
      numberColumn.push(this.state.currentNumber+i)
    }
    this.setState({numberColumn})
  }

  incrementNumber = () => {
    const currentNumber = this.state.currentNumber + 1;
    let numberColumn = this.state.numberColumn;
    numberColumn.shift()
    numberColumn.push(numberColumn[numberColumn.length-1]+1)
    this.setState({currentNumber})
  }

  decrementNumber = () => {
    const currentNumber = this.state.currentNumber - 1;
    let numberColumn = this.state.numberColumn;
    numberColumn.unshift(numberColumn[0]-1)
    numberColumn.pop()
    this.setState({currentNumber, numberColumn})
  }    


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.incrementNumber}>+1</button>
        {this.state.currentNumber > 0 ? <button onClick={this.decrementNumber}>-1</button> : ''}
        <CSSTransitionGroup
          transitionName="numberColumn"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          <NumberColumn numberColumn={this.state.numberColumn} currentNumber={this.state.currentNumber} />
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
