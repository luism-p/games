import { useState } from "react";

import confetti from "canvas-confetti";

import { WinnerModal } from "../common/WinnerModal.jsx";
import { Game } from "./Game.jsx";
import { checkWinnerFrom, checkEndGameFrom, getNextTurn, getFirstPlayer } from "../../logic/board.js";
import { TURNS } from "../../constanst.js";
import { Turn } from "../common/Turn.jsx";

export const Board = ({changeGame}) => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));

  const [turn, setTurn] = useState(getFirstPlayer(TURNS.CONECTA_4));

  // null es que no hay ganador, false es que hay empate, true un ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(getFirstPlayer(TURNS.CONECTA_4));
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const next = getNextTurn(turn, TURNS.CONECTA_4);
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
      <Turn turn={turn} turns={TURNS.CONECTA_4} />
      <button onClick={resetGame}>Empezar de nuevo</button>
      <button onClick={handleClickChageGame}>Cambiar de juego</button>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
