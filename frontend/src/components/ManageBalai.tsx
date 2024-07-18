import { useState } from "react";

import ManageInformationData from "./ManageInfomationData";
import SelectManageBalai from "./SelectManageBalai";
import ManagePublish from "./ManagePublish";

const ManageBalai = () => {
  const [activeButton, setActiveButton] = useState("publish");

  const handleCancelBalaiClick = () => {
    setActiveButton("reject");
  };

  const handlePublishBalaiClick = () => {
    setActiveButton("publish");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <SelectManageBalai
          onCancelClick={handleCancelBalaiClick}
          onPublishClick={handlePublishBalaiClick}
          activeButton={activeButton}
          cancelTitle="Ditolak (2)"
          publishTitle="Publish (13)"
        />
        {activeButton === "reject" ? (
          <ManageInformationData />
        ) : (
          <ManagePublish />
        )}
      </div>
    </div>
  );
};

export default ManageBalai;
