import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./pages/HooksApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>
);
