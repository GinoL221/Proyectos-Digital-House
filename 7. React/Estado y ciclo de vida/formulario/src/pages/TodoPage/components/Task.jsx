export const Task = ({ id, name, isDone }) => {
  return (
    <li>
      {id} {name} {isDone ? "✅" : "⛔"}
    </li>
  );
};
