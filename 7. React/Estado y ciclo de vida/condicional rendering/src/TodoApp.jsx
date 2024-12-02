const Item = ({ name, isDone }) => {
  return (
    <li>
      {name} {isDone && "✅"}
    </li>
  );
};

export const TodoApp = () => {
  return (
    <ul>
      <Item name="Maquetación Web" isDone={true} />
      <Item name="Programación Imperativa" isDone={true} />
      <Item name="JavaScript para DOM" isDone={true} />
      <Item name="React JS" isDone={false} />
    </ul>
  );
};
