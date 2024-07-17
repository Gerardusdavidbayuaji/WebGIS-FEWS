import CardParameter from "@/components/CardParameter";
import Download from "@/components/Download";
import Basemap from "@/components/Basemap";

const DashAdmin = () => {
  return (
    <div className="w-full min-h-0 flex flex-col">
      <div className="flex-1 flex m-4 gap-4">
        <Download />
        <div className="w-full flex flex-col space-y-2">
          <CardParameter />
          <Basemap />
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;
