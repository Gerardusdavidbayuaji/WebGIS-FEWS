import { useState } from "react";

import ManageAdmin from "@/components/ManageAdmin";
import DashAdmin from "@/components/DashAdmin";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";

const DashboardAdmin = () => {
  const [showDashAdmin, setShowDashAdmin] = useState(true);

  const handleDashboardAdminClick = () => {
    setShowDashAdmin(true);
  };
  const handleManageAdminClick = () => {
    setShowDashAdmin(false);
  };

  return (
    <Layout>
      <Sidebar
        onDashboardClick={handleDashboardAdminClick}
        onManageClick={handleManageAdminClick}
      />
      {showDashAdmin ? <DashAdmin /> : <ManageAdmin />}
    </Layout>
  );
};

export default DashboardAdmin;
