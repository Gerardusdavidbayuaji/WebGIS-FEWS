import { useState } from "react";

import SelectManageBalai from "./SelectManageBalai";
import ManageCancel from "./ManageCancel";
import ManagePublish from "./ManagePublish";

const ManageAdmin = () => {
  const [activeButton, setActiveButton] = useState("publish");

  const handleCancelAdminClick = () => {
    setActiveButton("reject");
  };

  const handlePublishAdminClick = () => {
    setActiveButton("publish");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <SelectManageBalai
          onCancelClick={handleCancelAdminClick}
          onPublishClick={handlePublishAdminClick}
          activeButton={activeButton}
          cancelTitle="Dibaru (5)"
          publishTitle="Publish (15)"
        />
        {activeButton === "reject" ? <ManageCancel /> : <ManagePublish />}
      </div>
    </div>
  );
};

export default ManageAdmin;
