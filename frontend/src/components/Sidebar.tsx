import DashboardIcon from "/assets/dashboard-icon.png";
import DocumentIcon from "/assets/document-icon.png";
import CloseIcon from "/assets/close-icon.png";

const Sidebar = () => {
  return (
    <div className="grid flex-cols-2 w-14 shadow-right">
      <div className="flex flex-col items-center justify-end space-y-2">
        <div className="bg-[#bad7e8] w-9 h-9 rounded-md flex items-center justify-center cursor-pointer">
          <img
            src={DashboardIcon}
            alt="Dashboard Icon"
            className="w-5 h-auto"
          />
        </div>
        <div className="bg-[#bad7e8] w-9 h-9 rounded-md flex items-center justify-center cursor-pointer">
          <img src={DocumentIcon} alt="Document Icon" className="w-4 h-5" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-end cursor-pointer">
        <img src={CloseIcon} alt="Close Icon" className="w-5 h-auto mb-4" />
      </div>
    </div>
  );
};

export default Sidebar;
