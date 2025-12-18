import { Column } from "./Column.jsx";

export function Game({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((column, index) => {
        return <Column key={index} column={column} updateBoard={updateBoard} index={index} />;
      })}
    </section>
  );
}
