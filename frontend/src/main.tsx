import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/dasboard";
import Basemap from "./__test__/basemap";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
