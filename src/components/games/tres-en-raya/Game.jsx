import { GameSquare } from "./GameSquare.jsx";

export function Game ({ board, updateBoard }) {
    return (
      <section className="game">
        {board.map((square, index) => {
          return (
            <GameSquare 
              key={index} 
              player={square} 
              onClick={() => updateBoard(index)}
            />
          );
        })}
      </section>
    );
}