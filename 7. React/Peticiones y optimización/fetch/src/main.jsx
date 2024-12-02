import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UsersApp } from "./pages/users/UsersApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>
);
