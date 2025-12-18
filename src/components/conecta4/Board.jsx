import { useState } from "react";

import confetti from "canvas-confetti";

import { WinnerModal } from "./WinnerModal.jsx";
import { Game } from "./Game.jsx";
import { checkEndGameFromConecta4, getNextTurn, getFirstPlayer, checkWinnerFromConecta4 } from "../../logic/board.js";
import { TURNS } from "../../constanst.js";
import { Turn } from "./Turn.jsx";

export const Board = ({changeGame}) => {
  const emptyBoard = () => Array.from({ length: 7 }, () => Array(6).fill(null));
  const [board, setBoard] = useState(emptyBoard());

  const [turn, setTurn] = useState(getFirstPlayer(TURNS.CONECTA_4));

  // null es que no hay ganador, false es que hay empate, true un ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(emptyBoard());
    setTurn(getFirstPlayer(TURNS.CONECTA_4));
    setWinner(null);
  };

  const updateBoard = (column, index) => {
    if (board[column][index] || winner) return;
    const newBoard = board.map((col) => col.slice());
    newBoard[column][index] = turn;
    setBoard(newBoard);

    const next = getNextTurn(turn, TURNS.CONECTA_4);
    setTurn(next);

    const newWinner = checkWinnerFromConecta4(newBoard, column, index);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFromConecta4(newBoard)) {
      setWinner(false);
    }
  };

  const handleClickChageGame = () => {

    resetGame()
    changeGame()
  }

  return (
    <main className="board">
      <h1>Conecta 4</h1>
      <Game board={board} updateBoard={updateBoard} />
      <Turn turn={turn} turns={TURNS.CONECTA_4} />
      <button onClick={resetGame}>Empezar de nuevo</button>
      <button onClick={handleClickChageGame}>Cambiar de juego</button>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
