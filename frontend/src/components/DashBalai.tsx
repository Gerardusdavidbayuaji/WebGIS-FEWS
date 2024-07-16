import Basemap from "./Basemap";
import Upload from "./Upload";

const DashBalai = () => {
  return (
    <div className="flex flex-grow min-h-0">
      <div className="rounded-md m-3 gap-4 w-full flex">
        <Upload />
        <Basemap />
      </div>
    </div>
  );
};

export default DashBalai;
