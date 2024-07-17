import React from "react";
import ReactDOM from "react-dom/client";
import DashboardAdmin from "./pages/admin/dashboard-admin";
import DashboardBalai from "./pages/balai/dashboard-balai";
import ManagementAdmin from "./pages/admin/management-admin";
import "./styles/index.css";
import DashAdmin from "./__test__/tes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardAdmin />
  </React.StrictMode>
);
