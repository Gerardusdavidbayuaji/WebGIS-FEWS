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

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import DropDownIcon from "/assets/drop-down-icon.png";
import NotifIcon from "/assets/notif-icon.png";
import PuprIcon from "/assets/pupr-icon.jpg";

const Navbar = () => {
  return (
    <header className="bg-[#1c60c7] w-full p-2">
      <nav className="flex gap-3 justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex outline outline-[#4D93FD] outline-2 items-center justify-center w-8 h-8 m-2 rounded-full cursor-pointer">
              <img
                src={NotifIcon}
                alt="Notification Icon"
                className="flex w-4 h-auto"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="h-56">
            <DialogHeader>
              <DialogTitle>Notifikasi (5)</DialogTitle>
            </DialogHeader>
            <div className="overflow-y-scroll py-2 pr-2">
              <div className="text-sm font-normal">
                <div className="bg-[#C2D9FA] rounded-md p-2">
                  <h1 className="text-[#2272EA] font-medium">
                    BBWS Pamali Juana
                  </h1>
                </div>
                <div className="p-2">
                  <p>
                    Telah menggunggah Data{" "}
                    <span className="font-medium">Daerah Irigasi</span> pada
                    <span className="font-medium"> WS Jeneberang</span>, segera
                    proses data.
                  </p>
                </div>
                <div className="flex items-center justify-end text-xs py-1 px-2 ">
                  7/20/2024
                </div>
                <hr className="border-1 border-[#767676] mb-2" />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex bg-[#4D93FD] rounded-full items-center justify-center gap-2">
          <img
            src={PuprIcon}
            alt="PUPR Icon"
            className="w-6 h-auto ml-2 rounded-full"
          />
          <p className="text-white text-base font-normal">admin_sda</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-3 mr-4">
                <img src={DropDownIcon} alt="Drop Down Icon" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-4 mt-6">
              <DropdownMenuLabel>Akun admin_sda</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="space-y-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex gap-1 p-2 items-center justify-start text-xs cursor-pointer rounded-md hover:bg-[#bad7e8]">
                      <User className="mr-2 h-4 w-4" />
                      <span>Ganti Password</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Ganti Password</DialogTitle>
                      <DialogDescription>
                        Buat perubahan pada password Anda di sini.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="password"
                          className="text-sm font-semibold"
                        >
                          Password Lama
                        </Label>
                        <Input
                          type="password"
                          id="password"
                          defaultValue="pupr12345"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="password"
                          className="text-sm font-semibold"
                        >
                          Password Baru
                        </Label>
                        <Input
                          type="password"
                          id="password"
                          defaultValue="pupr12345"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="password"
                          className="text-sm font-semibold"
                        >
                          Konfirmasi Password Baru
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
                      >
                        Simpan
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <div className="flex rounded-md hover:bg-[#bad7e8] gap-1 p-2 items-center justify-start text-xs cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
