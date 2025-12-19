export function GameSquare({ player, onClick }) {
  const className = `square ${player ? 'is-selected' : ''}`;
  return (
    <div 
      className={className}
      onClick={onClick}
    >
      {player}
    </div>
  );
}
