import ReactDOM from "react-dom/client";
import React from "react";

import DashboardAdmin from "./pages/admin/dashboard-admin";
import DashboardBalai from "./pages/balai/dashboard-balai";
import TestingFews from "./__test__/tes";
import AplikasiTes from "./__test__/aplikasi";
import DropdownMenu from "./__test__/tes";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardAdmin />
  </React.StrictMode>
);
