import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VariablesApp } from "./VariablesApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VariablesApp titulo="Este es un titulo" subtitulo="Este es un subtitulo" />
  </StrictMode>
);
