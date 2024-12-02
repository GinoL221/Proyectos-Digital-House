import { useState } from "react";

const Item = ({ name, isDone }) => {
  return (
    <li>
      {name} {isDone ? "✅" : "⛔"}
    </li>
  );
};

export const TodoApp = ({ arrayObjetos }) => {
  const [array, setArray] = useState(arrayObjetos);
  return (
    <>
      <ul>
        {array.map((item) => (
          <Item key={item.id} name={item.name} isDone={item.isDone} />
        ))}
      </ul>
    </>
  );
};
