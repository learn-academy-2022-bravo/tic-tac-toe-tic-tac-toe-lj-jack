import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      currentPlayer: "X"
    }
  }

  handleGamePlay = (currentClick) => {
    const { squares, currentPlayer } = this.state
    if(squares[currentClick] === " ") {
      squares[currentClick] = currentPlayer
      this.setState({squares: squares, currentPlayer: currentPlayer === "X" ? "O" : "X"})
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameBoard'>
        {this.state.squares.map((value, index) => {
          return(
            <Square 
            key={index}
            value={value}
            index={index}
            handleGamePlay={this.handleGamePlay}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
