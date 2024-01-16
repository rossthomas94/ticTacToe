 import { useState } from 'react'
import Player from "./components/Player."
import GameBoard from "./components/GameBoard"
import Log from "../src/components/Log"
import GameOver from './components/GameOver'

import {WINNING_COMBINATIONS} from './winning.js'
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function getActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = 'O'
  } 
  return currentPlayer;
};

function App() {
  const [gameTurn, setGameTurn] = useState([])

  const activePlayer = getActivePlayer(gameTurn)


const gameBoard = [...initialGameBoard.map(array => [...array])];

    
    for (const turn of gameTurn) {
        const { sqaure, player } = turn;
        const { row, col } =  sqaure;
        gameBoard[row][col] = player;
    }

    let winner;

    for (const wins of WINNING_COMBINATIONS) {
      const firstSquare = gameBoard[wins[0].row][wins[0].column];
      const secondSquare = gameBoard[wins[1].row][wins[1].column];
      const thirdSquare = gameBoard[wins[2].row][wins[2].column];
  
      if (firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare ) {
        winner = firstSquare
      }
    }
    const hasDraw = gameTurn.length === 9 && !winner

  function handleSelectedSquare (rowIndex, colIndex) {
    setGameTurn(preTurns => {
const currentPlayer = getActivePlayer(preTurns)
      const updatedTurn = [ {sqaure : {row: rowIndex, col: colIndex},
         player: currentPlayer} ,
        ...preTurns]
      return updatedTurn
    })
  }

  function handleRestart () {
    setGameTurn([])
  }

  return (
    <main>
      <div id='game-container'>
      <ol id ='players' className='highlight-player'>
        <Player  defaultName='Player 1' synbol='X' isActive={activePlayer ==='X'} />
        <Player defaultName='Player 2' synbol='O' isActive={activePlayer === 'O'} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart}/>}
      <GameBoard board={gameBoard} onSelectSquare={handleSelectedSquare}/> 

      </div>
<Log turns={gameTurn}/>
   </main>
  )
}

export default App
