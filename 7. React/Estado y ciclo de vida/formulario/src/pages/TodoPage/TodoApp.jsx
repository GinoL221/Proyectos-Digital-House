import { useState } from "react";
import { Task } from "./components/Task";
import { AddTask } from "./components/AddTask";

export const TodoApp = () => {
  const addTask = (newTaskName) => {
    const newTask = {
      id: array.length + 1,
      name: newTaskName,
      isDone: false,
    };
    setArray([...array, newTask]);
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

  return (
    <>
      <AddTask addTask={addTask} />
      <ul>
        {array.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
};
