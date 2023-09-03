// core
import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App.tsx";
// ----------------------------------------------------------------------

const rootEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
