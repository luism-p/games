import { Board } from "./components/tres-en-raya/Board";

export const TURNS = {
  X: "❌",
  O: "⚪",
};

export const GAMES = {
  "TRES_EN_RAYA":"Tres en raya", 
  "CONECTA_4":"Conecta 4"
}



export const WINNER_COMBOS = [
  // Filas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columnas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonales
  [0, 4, 8],
  [2, 4, 6],
];