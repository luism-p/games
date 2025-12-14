import { WINNER_COMBOS, TURNS } from "../constanst.js";

export function checkWinnerFrom(boardTocheck) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    const player = boardTocheck[a];
    if (player && player === boardTocheck[b] && player === boardTocheck[c]) {
      return player;
    }
  }
  return null;
}

export const checkEndGameFrom = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

export const getFirstPlayer = () => {
  const random = Math.round(Math.random());
  return Object.values(TURNS)[random];
};

export const getNextTurn = (turn) => {
  return turn === TURNS.X ? TURNS.O : TURNS.X;
};
