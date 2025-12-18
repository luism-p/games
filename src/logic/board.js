import { WINNER_COMBOS} from "../constanst.js";

export function checkWinnerFromTresEnRaya(boardTocheck) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    const player = boardTocheck[a];
    if (player && player === boardTocheck[b] && player === boardTocheck[c]) {
      return player;
    }
  }
  return null;
}

export function checkWinnerFromConecta4(boardTocheck, lastCol, lastRow) {
  if (lastCol == null || lastRow == null) return null;
  const cols = boardTocheck.length;
  const rows = boardTocheck[0]?.length || 0;
  const inBounds = (c, r) => c >= 0 && c < cols && r >= 0 && r < rows;

  const player = boardTocheck[lastCol][lastRow];
  if (!player) return null;

  const countDir = (startC, startR, dc, dr) => {
    let c = startC + dc;
    let r = startR + dr;
    let count = 0;
    while (inBounds(c, r) && boardTocheck[c][r] === player) {
      count += 1;
      c += dc;
      r += dr;
    }
    return count;
  };

  const directions = [
    [1, 0], // horizontal
    [0, 1], // vertical
    [1, 1], // diagonal down-right
    [1, -1] // diagonal up-right
  ];

  for (const [dc, dr] of directions) {
    const total = 1 + countDir(lastCol, lastRow, dc, dr) + countDir(lastCol, lastRow, -dc, -dr);
    if (total >= 4) return player;
  }
  return null;
}

export const checkEndGameFromTresEnRaya = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

export const checkEndGameFromConecta4 = (newBoard) => {
  return newBoard.every((col) => col.every((cell) => cell !== null));
};

export const getFirstPlayer = (turns) => {
  const random = Math.round(Math.random());
  return Object.values(turns)[random];
};

export const getNextTurn = (turn, turns) => {
  return turn === turns.X ? turns.O : turns.X;
};
