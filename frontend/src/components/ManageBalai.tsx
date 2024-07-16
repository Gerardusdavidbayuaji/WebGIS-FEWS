import { useState } from "react";
import SelectManageBalai from "./SelectManageBalai";
import ManageCancel from "./ManageCancel";
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
        />
        {activeButton === "reject" ? <ManageCancel /> : <ManagePublish />}
      </div>
    </div>
  );
};

export default ManageBalai;
