import { WinnerSquare } from "./WinnerSquare.jsx";

export function WinnerModal ({ winner, resetGame }) {
    if (winner === null) return null;

    const winnerText = winner === false ? "Empate" : "Ha ganado: "; 
  return (
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className="win">{winner && <WinnerSquare player={winner} />}</header>
          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
  );
};
