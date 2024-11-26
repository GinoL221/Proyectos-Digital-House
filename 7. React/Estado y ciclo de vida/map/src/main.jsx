import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoApp } from "./TodoApp";

const arrayObjetos = [
  { id: 1, name: "Introducción a React", isDone: true },
  { id: 2, name: "Vite", isDone: true },
  { id: 3, name: "Componentes", isDone: true },
  { id: 4, name: "Variables", isDone: true },
  { id: 5, name: "JSX", isDone: true },
  { id: 6, name: "Fragment", isDone: true },
  { id: 7, name: "Estilos", isDone: true },
  { id: 8, name: "Props", isDone: true },
  { id: 9, name: "Hooks", isDone: true },
  { id: 10, name: "useState", isDone: true },
  { id: 11, name: "Condicionales", isDone: true },
  { id: 12, name: "Map", isDone: false },
  { id: 13, name: "Formularios", isDone: false },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp arrayObjetos={arrayObjetos} />
  </StrictMode>
);
