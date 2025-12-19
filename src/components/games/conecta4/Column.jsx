import { GameSquare } from "./GameSquare.jsx";
import { findNextAvailableRow } from "../../../logic/board.js";

export function Column({ updateBoard, column, index }) {
  const handleClick = (colIndex) => {
    const targetIndex = findNextAvailableRow(column);
    if (targetIndex === null) return;
    updateBoard(colIndex, targetIndex);
  };

  return (
    <section className="column" onClick={() => handleClick(index)}>
      {column.map((square, idx) => (
        <GameSquare 
          key={idx}
          player={square}
        />
      ))}
    </section>
  );
}
