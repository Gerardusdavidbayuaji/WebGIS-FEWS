import ManageBalai from "@/components/ManageBalai";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";

import "leaflet/dist/leaflet.css";

const ManagementBalai = () => {
  return (
    <Layout>
      <Sidebar />
      <ManageBalai />
    </Layout>
  );
};

export default ManagementBalai;
