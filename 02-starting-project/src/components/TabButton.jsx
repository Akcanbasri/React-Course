export default function TabButton({ children, onClick}) {
  console.log("TabButton Component Rendered");
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}
