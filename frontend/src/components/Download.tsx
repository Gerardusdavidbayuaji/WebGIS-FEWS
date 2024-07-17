import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select,
} from "@/components/ui/select";

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

const Download = () => {
  return (
    <div className="w-72 h-full flex flex-col rounded-lg shadow-full p-2">
      <h3 className="text-base font-bold text-black flex text-center justify-center my-2">
        Data GIS
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <Select>
          <SelectTrigger className="w-full h-7">
            <SelectValue placeholder="Januari" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bulan_2">Februari</SelectItem>
            <SelectItem value="bulan_3">Maret</SelectItem>
            <SelectItem value="bulan_4">April</SelectItem>
            <SelectItem value="bulan_5">Mei</SelectItem>
            <SelectItem value="bulan_6">Juni</SelectItem>
            <SelectItem value="bulan_7">Juli</SelectItem>
            <SelectItem value="bulan_8">Agustus</SelectItem>
            <SelectItem value="bulan_9">September</SelectItem>
            <SelectItem value="bulan_10">Oktober</SelectItem>
            <SelectItem value="bulan_11">November</SelectItem>
            <SelectItem value="bulan_12">Desember</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full h-7">
            <SelectValue placeholder="2024" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tahun_2">2023</SelectItem>
            <SelectItem value="tahun_3">2022</SelectItem>
            <SelectItem value="tahun_4">2021</SelectItem>
            <SelectItem value="tahun_5">2020</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="my-2 space-y-2">
        <Select>
          <SelectTrigger className="w-full h-7">
            <SelectValue placeholder="BBWS Pemali Juana" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bbws_2">BBWS Mesuji Sekampung</SelectItem>
            <SelectItem value="bbws_3">
              BBWS Mesuji Ciliwung Cisadane
            </SelectItem>
            <SelectItem value="bbws_4">BBWS Mesuji Citanduy</SelectItem>
            <SelectItem value="bbws_5">BBWS Mesuji Serayu Opak</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full h-7">
            <SelectValue placeholder="Serayu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sungai_2">Bogowonto</SelectItem>
            <SelectItem value="sungai_3">Jratunseluna</SelectItem>
            <SelectItem value="sungai_4">Progo</SelectItem>
            <SelectItem value="sungai_5">Opak</SelectItem>
          </SelectContent>
        </Select>
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
