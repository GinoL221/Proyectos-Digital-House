import { useState } from "react";

const Item = ({ name, isDone }) => {
  return (
    <li>
      {name} {isDone ? "✅" : "⛔"}
    </li>
  );
};

export const TodoApp = () => {
  const handleClick = () => {
    /*
    no es posible hacerlo con push => array.push({ id: 15, name: "useEffect", isDone: false });
    */
    setID(id + 1);
    const newItem = { id: id, name: "useEffect", isDone: false };
    setArray([...array, newItem]);
  };

  const arrayObjectos = [
    { id: 1, name: "Introducción a React", isDone: true },
    { id: 2, name: "Vite", isDone: true },
    { id: 3, name: "Componentes", isDone: true },
    { id: 4, name: "Variables", isDone: true },
    { id: 5, name: "JSX", isDone: true },
    { id: 6, name: "Fragment", isDone: true },
    { id: 7, name: "Estilos", isDone: true },
    { id: 8, name: "Props", isDone: true },
    { id: 9, name: "Events", isDone: true },
    { id: 10, name: "Hooks", isDone: true },
    { id: 11, name: "useState", isDone: true },
    { id: 12, name: "Condicionales", isDone: true },
    { id: 13, name: "Map", isDone: false },
    { id: 14, name: "Formularios", isDone: false },
  ];

  const [array, setArray] = useState(arrayObjectos);
  const [id, setID] = useState(array.length + 1);
  return (
    <>
      <p>{array.length}</p>
      <button onClick={handleClick}>Agregar un elemento al Array</button>
      {array.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
};
