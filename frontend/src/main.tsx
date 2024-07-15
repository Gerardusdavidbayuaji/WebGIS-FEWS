import React from "react";
import ReactDOM from "react-dom/client";
import DashboardAdmin from "./pages/admin/dashboard-admin";
import DashboardBalai from "./pages/balai/dashboard-balai";
import ManagementAdmin from "./pages/admin/management-admin";
import ManagementBalai from "./pages/balai/management-balai";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardBalai />
  </React.StrictMode>
);
