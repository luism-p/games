export function WinnerSquare({ player }) {
  const className = `square winner-square ${player ? 'with-player' : 'draw'}`;
  return (
    <div className={className}>
      {player}
    </div>
  );
}
