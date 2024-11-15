import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EventosApp } from "./EventosApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventosApp />
  </StrictMode>
);
