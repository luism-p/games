import { useState } from 'react'

import { WinnerModal } from './WinnerModal.jsx'
import { Game } from './Game.jsx'
import { checkEndGameFromConecta4, getNextTurn, getFirstPlayer, checkWinnerFromConecta4, triggerConfetti } from '../../../logic/board.js'
import { TURNS } from '../../../constanst.js'
import { Turn } from './Turn.jsx'

export const Board = ({ changeGame }) => {
  const emptyBoard = () => Array.from({ length: 7 }, () => Array(6).fill(null))
  const [board, setBoard] = useState(emptyBoard())

  const [turn, setTurn] = useState(getFirstPlayer(TURNS.CONECTA_4))

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(emptyBoard())
    setTurn(getFirstPlayer(TURNS.CONECTA_4))
    setWinner(null)
  }

  const updateBoard = (column, index) => {
    setBoard(prevBoard => {
      if (prevBoard[column][index] || winner) return prevBoard
      const newBoard = prevBoard.map((col) => col.slice())
      newBoard[column][index] = turn
      const nextTurn = getNextTurn(turn, TURNS.CONECTA_4)
      setTurn(nextTurn)

      const newWinner = checkWinnerFromConecta4(newBoard, column, index)
      if (newWinner) {
        triggerConfetti()
        setWinner(newWinner)
      } else if (checkEndGameFromConecta4(newBoard)) {
        setWinner(false)
      }
      return newBoard
    })
  }

  const handleClickChangeGame = () => {
    resetGame()
    changeGame()
  }
  return (
    <main className='board'>
      <h1>Conecta 4</h1>
      <Game board={board} updateBoard={updateBoard} />
      <Turn turn={turn} turns={TURNS.CONECTA_4} />
      <button onClick={resetGame}>Empezar de nuevo</button>
      <button onClick={handleClickChangeGame}>Cambiar de juego</button>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
