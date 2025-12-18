import { Square } from "../conecta4/Square.jsx";

export const Turn = ({ turn, turns }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === turns.X}>{turns.X}</Square>
      <Square isSelected={turn === turns.O}>{turns.O}</Square>
    </section>
  );
};
