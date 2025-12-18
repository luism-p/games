import { Square } from "./Square.jsx";

export function Column({ updateBoard, column, index }) {
  const handleClick = (colIndex) => {
    const targetIndex = column.lastIndexOf(null);
    if (targetIndex === -1) return;
    updateBoard(colIndex, targetIndex);
  };

  return (
    <section className="column" onClick={() => handleClick(index)}>
      {column.map((square, idx) => (
        <Square key={idx} index={idx}>
          {square}
        </Square>
      ))}
    </section>
  );
}
