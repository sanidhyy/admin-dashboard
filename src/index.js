import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";

// Render whole app
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
