import { useState } from "react";

import confetti from "canvas-confetti";

import { WinnerModal } from "./WinnerModal.jsx";
import { Game } from "./Game.jsx";
import { checkWinnerFrom, checkEndGameFrom, getNextTurn, getFirstPlayer } from "../../logic/board.js";
import { Turn } from "./Turn.jsx";

export const Board = ({changeGame}) => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(getFirstPlayer());

  // null es que no hay ganador, false es que hay empate, true un ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(getFirstPlayer());
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const next = getNextTurn(turn);
    setTurn(next);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFrom(newBoard)) {
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
      <Turn turn={turn} />
      <button onClick={resetGame}>Empezar de nuevo</button>
      <button onClick={handleClickChageGame}>Cambiar de juego</button>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
