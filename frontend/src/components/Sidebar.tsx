import { useState } from "react";

import DashboardActiveIcon from "/assets/dashboard-active-icon.png";
import DashboardIcon from "/assets/dashboard-icon.png";
import ManagedActiveIcon from "/assets/document-active-icon.png";
import ManageIcon from "/assets/document-icon.png";
import CloseIcon from "/assets/close-icon.png";

const Sidebar = ({
  onDashboardClick,
  onManageClick,
}: {
  onDashboardClick: () => void;
  onManageClick: () => void;
}) => {
  const [active, setActive] = useState("dashboard");

  const handleDashboardClick = () => {
    setActive("dashboard");
    onDashboardClick();
  };

  const handleManageClick = () => {
    setActive("manage");
    onManageClick();
  };

  return (
    <div className="grid flex-cols-2 w-14 shadow-right">
      <div className="flex flex-col items-center justify-end space-y-2">
        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition duration-300 ${
            active === "dashboard" ? "bg-[#bad7e8]" : "bg-white"
          }`}
          onClick={handleDashboardClick}
        >
          <img
            src={active === "dashboard" ? DashboardActiveIcon : DashboardIcon}
            alt="Dashboard Icon"
            className="w-5 h-auto"
          />
        </div>
        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition duration-300 ${
            active === "manage" ? "bg-[#bad7e8]" : "bg-white"
          }`}
          onClick={handleManageClick}
        >
          <img
            src={active === "manage" ? ManagedActiveIcon : ManageIcon}
            alt="Document Icon"
            className="w-4 h-5"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-end cursor-pointer">
        <img src={CloseIcon} alt="Close Icon" className="w-5 h-auto mb-4" />
      </div>
    </div>
  );
};

export default Sidebar;
