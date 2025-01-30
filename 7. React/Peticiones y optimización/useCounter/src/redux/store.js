import { legacy_createStore as createStore } from "redux";

const initialState = [
  {
    id: 1,
    name: "Explicar Reducers",
    finalizada: false,
  },
];

const tareaReducer = (state, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar tarea":
      return [...state, action.payload];

    case "[TAREAS] Eliminar tarea":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "[TAREAS] Finalizar tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return { ...tarea, finalizada: !tarea.finalizada };
        } else {
          return tarea;
        }
      });

    case "[TAREAS] Borrar tareas":
      return [];

    default:
      break;
  }
  return state;
};

export const store = createStore(tareaReducer, initialState);
