import DashBalai from "@/components/DashBalai";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";

import "leaflet/dist/leaflet.css";

const DashboardBalai = () => {
  return (
    <Layout>
      <Sidebar />
      <DashBalai />
    </Layout>
  );
};

export default DashboardBalai;
