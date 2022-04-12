import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      currentPlayer: "X",
      winner: null
    }
  }
  
  winner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningConditions.forEach(value => {
      const [one, two, three] = value
      const { squares } = this.state
      if (squares[one] === "X" && squares[two] === "X" && squares[three] === "X") {
        this.setState({ winner: "Player One"})
      } else if (squares[one] === "O" && squares[two] === "O" && squares[three] === "O") {
        this.setState({ winner: "Player Two"})
      }
    })
  }

  handleGamePlay = (currentClick) => {
    const { squares, currentPlayer } = this.state
    if(squares[currentClick] === " ") {
      squares[currentClick] = currentPlayer
      this.setState({squares: squares, currentPlayer: currentPlayer === "X" ? "O" : "X"})
    }
    this.winner()
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        {this.state.winner && <h3>{this.state.winner} won the game</h3>}
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
