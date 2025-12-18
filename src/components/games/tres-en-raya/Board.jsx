import { useState } from "react";

import confetti from "canvas-confetti";

import { WinnerModal } from "./WinnerModal.jsx";
import { Turn } from "./Turn.jsx";

import { Game } from "./Game.jsx";
import { getNextTurn, getFirstPlayer, checkWinnerFromTresEnRaya, checkEndGameFromTresEnRaya } from "../../../logic/board.js";
import { TURNS } from "../../../constanst.js";

export const Board = ({changeGame}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(getFirstPlayer(TURNS.TRES_EN_RAYA));

  // null es que no hay ganador, false es que hay empate, true un ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(getFirstPlayer(TURNS.TRES_EN_RAYA));
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const next = getNextTurn(turn, TURNS.TRES_EN_RAYA);
    setTurn(next);

    const newWinner = checkWinnerFromTresEnRaya(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFromTresEnRaya(newBoard)) {
      setWinner(false);
    }
  };

  const handleClickChageGame = () => {

    resetGame()
    changeGame()
  }

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <Game board={board} updateBoard={updateBoard} />
      <Turn turn={turn} turns={TURNS.TRES_EN_RAYA} />
      <button onClick={resetGame}>Empezar de nuevo</button>
      <button onClick={handleClickChageGame}>Cambiar de juego</button>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
