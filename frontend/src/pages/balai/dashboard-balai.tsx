import { useState } from "react";

import ManageBalai from "@/components/ManageBalai";
import DashBalai from "@/components/DashBalai";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";

const DashboardBalai = () => {
  const [showDashBalai, setShowDashBalai] = useState(true);

  const handleDashboardBalaiClick = () => {
    setShowDashBalai(true);
  };
  const handleManageBalaiClick = () => {
    setShowDashBalai(false);
  };

  return (
    <Layout>
      <Sidebar
        onDashboardClick={handleDashboardBalaiClick}
        onManageClick={handleManageBalaiClick}
      />
      {showDashBalai ? <DashBalai /> : <ManageBalai />}
    </Layout>
  );
};

export default DashboardBalai;
