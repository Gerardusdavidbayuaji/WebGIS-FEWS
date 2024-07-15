import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/ui/label";

const DashboardBalai = () => {
  const mapref = useRef<L.Map | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mapref.current) {
      mapref.current = L.map("map", { zoomControl: false }).setView(
        [-2.18, 115.795],
        5
      );
      const basemap = L.tileLayer(
        "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=AW8IuG306IIk8kNdxEw6",
        {
          attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }
      );
      basemap.addTo(mapref.current);
    }
  }, []);
  return (
    <div className="bg-white text-lg font-bold h-screen w-full flex flex-col">
      {/* start navbar */}
      <div className="bg-[#1c60c7] w-full p-2 shadow-bottom">
        <div className="flex gap-3 justify-end">
          <div className="outline-[#4D93FD] outline-2 flex items-center justify-center w-8 h-8 m-2 rounded-full outline cursor-pointer">
            <img src="/assets/notif-icon.png" className="flex w-4 h-auto" />
          </div>
          <div className="bg-[#4D93FD] rounded-full flex items-center justify-center gap-2">
            <img
              src="/assets/pupr-icon.jpg"
              className="w-6 h-auto ml-2 rounded-full"
            />
            <p className="text-white text-base font-normal">
              balai_pemali_juana
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ml-3 mr-4">
                  <img src="/assets/drop-down-icon.png" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-4 mt-6">
                <DropdownMenuLabel>Akun balai_pemali_juana</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="space-y-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex gap-1 p-2 items-center justify-start text-xs cursor-pointer rounded-md hover:bg-[#bad7e8]">
                        <User className="mr-2 h-4 w-4" />
                        <span>Ganti Password</span>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Ganti Password</DialogTitle>
                        <DialogDescription>
                          Buat perubahan pada password Anda di sini.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            defaultValue="admin_pupr"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="password" className="text-right">
                            Password
                          </Label>
                          <Input
                            type="password"
                            id="password"
                            defaultValue="pupr12345"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          className="bg-[#5ec95d] hover:bg-[#48c23d] text-white hover:text-white"
                          type="submit"
                          variant="outline"
                          onClick={() => {
                            toast({
                              description: "Berhasil mengubah password",
                            });
                          }}
                        >
                          Simpan
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-1 p-2 items-center justify-start text-xs cursor-pointer rounded-md hover:bg-[#bad7e8]">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Keluar</span>
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {/* end navbar */}

      {/* start dashboard */}
      <div className="flex flex-grow min-h-0">
        {/* start sidebar 1 */}
        <div className="grid flex-cols-2 w-14 shadow-right">
          <div className="flex flex-col items-center justify-end space-y-2">
            <div className="bg-[#bad7e8] w-9 h-9 rounded-md flex items-center justify-center cursor-pointer">
              <img src="/assets/dashboard-icon.png" className="w-5 h-auto" />
            </div>
            <div className="bg-[#bad7e8] w-9 h-9 rounded-md flex items-center justify-center cursor-pointer">
              <img src="/assets/document-icon.png" className="w-4 h-5" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-end cursor-pointer">
            <img src="/assets/close-icon.png" className="w-5 h-auto mb-4" />
          </div>
        </div>
        {/* end sidebar 1 */}

        {/* start dashboard basemap */}

        {/* start main dashboard */}
        <div className="rounded-md m-3 gap-4 w-full flex">
          <div className="bg-white h-full flex flex-col rounded-lg shadow-full p-2 w-72">
            <h3 className="text-base font-bold text-black flex text-center justify-center my-2">
              Data GIS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Select>
                <SelectTrigger className="w-full h-7">
                  <SelectValue placeholder="Bulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bulan_1">Januari</SelectItem>
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
                  <SelectValue placeholder="Tahun" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tahun_1">2024</SelectItem>
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
                  <SelectValue placeholder="B/BBWS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bbws_1">BBWS Pemali Juana</SelectItem>
                  <SelectItem value="bbws_2">BBWS Mesuji Sekampung</SelectItem>
                  <SelectItem value="bbws_3">
                    BBWS Mesuji Ciliwung Cisadane
                  </SelectItem>
                  <SelectItem value="bbws_4">BBWS Mesuji Citanduy</SelectItem>
                  <SelectItem value="bbws_5">
                    BBWS Mesuji Serayu Opak
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full h-7">
                  <SelectValue placeholder="Sungai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sungai_1">Serayu</SelectItem>
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
                    <img
                      src="/assets/publish-icon.png"
                      className="w-6 h-auto"
                    />
                    <p className="font-normal text-sm text-white">Upload</p>
                  </div>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-sm font-medium">
                    Upload Data
                  </AlertDialogTitle>
                  <div className="grid w-full items-center">
                    <Input
                      id="picture"
                      type="file"
                      className="text-xs font-normal"
                    />
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>
                  <AlertDialogAction>Upload</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div id="map" className="rounded-md z-30" />
        </div>
      </div>
      {/* end dashboard */}
    </div>
  );
};

export default DashboardBalai;
