import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import CustomFormSelect from "./CustomFormSelect";

const Download = () => {
  return (
    <div className="w-72 h-full flex flex-col rounded-lg shadow-full p-2">
      <h3 className="text-base font-bold text-black flex text-center justify-center my-[3px]">
        Data GIS
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <CustomFormSelect
          title="Bulan"
          value="Bulan_1"
          description="Januari"
          triggerClassName="w-full h-7"
        />
        <CustomFormSelect
          title="Tahun"
          value="Tahun_1"
          description="2024"
          triggerClassName="w-full h-7"
        />
      </div>

      <div className="my-2 space-y-2">
        <CustomFormSelect
          title="BBWS"
          value="bbws_1"
          description="BBWS Mesuji Serayu Opak"
          triggerClassName="w-full h-7"
        />
        <CustomFormSelect
          title="Sungai"
          value="sungai_1"
          description="Serayu"
          triggerClassName="w-full h-7"
        />
      </div>

      <div className="mb-2 space-y-2 flex-grow">
        <h4 className="font-bold text-xs mb-1">Pilih Data</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="download_data" />
            <label
              htmlFor="download_data"
              className="font-normal text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bendungan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="download_data" />
            <label
              htmlFor="download_data"
              className="font-normal text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Danau
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="download_data" />
            <label
              htmlFor="download_data"
              className="font-normal text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Embung
            </label>
          </div>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-[#7d7d7d] hover:bg-[#5ec95d] w-full rounded-md">
            <div className="flex gap-2 items-center justify-center">
              <img src="/assets/download-icon.png" className="w-6 h-auto" />
              <p className="font-normal text-sm text-white">Download</p>
            </div>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bendungan.zip
                </label>
              </div>
            </div>
            <AlertDialogDescription>
              Ini akan mengunduh data dan menyimpan salinannya di perangkat
              Anda.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction>Download</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Download;
