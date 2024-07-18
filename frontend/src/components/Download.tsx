import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import CustomFormSelect from "./CustomFormSelect";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

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
  const [isExpandedPDA, setIsExpandedPDA] = useState(false);
  const [isExpandedPCH, setIsExpandedPCH] = useState(false);
  const [isExpandedARR, setIsExpandedARR] = useState(true);
  const [isExpandedAWLR, setIsExpandedAWLR] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTogglePDA = () => {
    setIsExpandedPDA(!isExpandedPDA);
  };

  const handleTogglePCH = () => {
    setIsExpandedPCH(!isExpandedPCH);
  };

  const handleToggleARR = () => {
    setIsExpandedARR(!isExpandedARR);
  };

  const handleToggleAWLR = () => {
    setIsExpandedAWLR(!isExpandedAWLR);
  };

  const handleCheckboxChange = (e: any) => setIsChecked(e.target.checked);
  const handleDownloadClick = () => {
    if (isChecked) {
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = () => setIsDialogOpen(false);

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

      <div className="mb-2 space-y-2 flex-grow h-2 overflow-y-scroll p-2">
        <h4 className="font-bold text-xs mb-1">Pilih Data</h4>
        <div className="space-y-2 cursor-pointer">
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleTogglePDA}
            >
              <h1 className="font-normal text-xs">Pos Duga Air (PDA)</h1>

              {isExpandedPDA ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                isExpandedPDA ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="danau" onChange={handleCheckboxChange} />
                    <label htmlFor="danau" className="font-normal text-xs">
                      Danau
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bendungan" onChange={handleCheckboxChange} />
                    <label htmlFor="bendungan" className="font-normal text-xs">
                      Bendungan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="embung" onChange={handleCheckboxChange} />
                    <label htmlFor="embung" className="font-normal text-xs">
                      Embung
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleTogglePCH}
            >
              <h1 className="font-normal text-xs">Pos Curah Hujan (PCH)</h1>

              {isExpandedPCH ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                isExpandedPCH ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="curah_hujan"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" onChange={handleCheckboxChange} />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="genangan_banjir"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleToggleARR}
            >
              <h1 className="font-normal text-xs">ARR</h1>

              {isExpandedARR ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out delay-200 overflow-hidden ${
                isExpandedARR ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="curah_hujan"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" onChange={handleCheckboxChange} />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="genangan_banjir"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="genangan_rob"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="genangan_rob"
                      className="font-normal text-xs"
                    >
                      Genangan Rob
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="history_banjir"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="history_banjir"
                      className="font-normal text-xs"
                    >
                      History Banjir
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="penggunaan_lahan"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="penggunaan_lahan"
                      className="font-normal text-xs"
                    >
                      Penggunaan Lahan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tutupan_lahan"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="tutupan_lahan"
                      className="font-normal text-xs"
                    >
                      Tutupan Lahan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sempadan_pantai"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="sempadan_pantai"
                      className="font-normal text-xs"
                    >
                      Sempadan Pantai
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sempadan_danau"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="sempadan_danau"
                      className="font-normal text-xs"
                    >
                      Sempadan Danau
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleToggleAWLR}
            >
              <h1 className="font-normal text-xs">AWLR</h1>

              {isExpandedAWLR ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                isExpandedAWLR ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="curah_hujan"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" onChange={handleCheckboxChange} />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="genangan_banjir"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] w-full rounded-md">
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
