import React from "react";
import ReactDOM from "react-dom/client";
import DashboardAdmin from "./pages/admin/dashboard-admin";
import ManagementAdmin from "./pages/admin/management-admin";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ManagementAdmin />
  </React.StrictMode>
);
