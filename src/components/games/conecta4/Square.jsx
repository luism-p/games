export function Square ({ children, isSelected }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
};