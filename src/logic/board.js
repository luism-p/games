import { WINNER_COMBOS} from "../constanst.js";

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

export const getFirstPlayer = (turns) => {
  const random = Math.round(Math.random());
  return Object.values(turns)[random];
};

export const getNextTurn = (turn, turns) => {
  return turn === turns.X ? turns.O : turns.X;
};
