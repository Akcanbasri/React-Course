export default function TabButton({ children, onClick, isSelected }) {
  console.log("TabButton Component Rendered");
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
