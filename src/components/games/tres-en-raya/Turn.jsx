import { TurnIndicator } from "./TurnIndicator.jsx";

export const Turn = ({ turn, turns }) => {
  return (
    <section className="turn">
      <TurnIndicator player={turns.X} isActive={turn === turns.X} />
      <TurnIndicator player={turns.O} isActive={turn === turns.O} />
    </section>
  );
};
