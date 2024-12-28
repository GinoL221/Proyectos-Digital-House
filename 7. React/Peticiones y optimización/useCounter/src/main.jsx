import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HooksApp />
    </Provider>
  </StrictMode>
);
