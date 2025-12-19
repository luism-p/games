export function TurnIndicator({ player, isActive }) {
  const className = `square turn-indicator ${isActive ? 'active' : 'inactive'}`;
  return (
    <div className={className}>
      {player}
    </div>
  );
}
