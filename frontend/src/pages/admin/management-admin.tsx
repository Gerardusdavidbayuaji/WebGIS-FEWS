import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

import "leaflet/dist/leaflet.css";

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

const ManagementAdmin = () => {
  return (
    <div>
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
              <p className="text-white text-base font-normal">admin_pupr</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-3 mr-4">
                    <img src="/assets/drop-down-icon.png" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-4 mt-6">
                  <DropdownMenuLabel>Akun admin_pupr</DropdownMenuLabel>
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

          <div className="w-full flex flex-col">
            <div className="p-4 flex flex-col flex-grow">
              <div className="space-y-7 mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[#1c60c7]">
                    Quality Control
                  </h3>
                  <div className="flex rounded-md w-64 border-[1px] border-[#364878] gap-1 p-1">
                    <Button className="flex w-full h-7 text-xs font-normal text-white text-center justify-center bg-[#364878] hover:bg-[#364878]">
                      Data Baru (23)
                    </Button>
                    <Button className="flex w-full h-7 text-xs font-normal text-center justify-center text-[#364878] bg-white hover:bg-white">
                      Publish (300)
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <div className="flex w-60 items-center">
                      <Input
                        type="text"
                        placeholder="Cari File"
                        className="rounded-none rounded-l-md h-7 border-[#364878] text-[#364878] text-xs font-medium"
                      />
                      <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] rounded-none rounded-r-md h-7 w-8 p-1">
                        <img
                          src="assets/search-icon.png"
                          className="w-3 h-auto"
                        />
                      </Button>
                    </div>
                    <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] rounded-md h-7 w-8 p-1">
                      <img src="assets/filter.png" className="w-3 h-auto" />
                    </Button>
                  </div>

                  <div className="flex  w-72 gap-1">
                    <Button className="flex w-full h-7 gap-1 text-xs font-normal text-[#2373eb] text-center justify-center bg-[#b5d3ff] hover:bg-[#b5d3ff]">
                      <img src="assets/share-icon.png" className="w-4 h-auto" />
                      <p>Share Data</p>
                    </Button>
                    <Button className="flex w-full h-7 gap-1 text-xs font-normal text-center justify-center text-white bg-[#2373eb] hover:bg-[#2373eb]">
                      <img
                        src="assets/publish-icon.png"
                        className="w-4 h-auto"
                      />
                      <p>Tambah Data</p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-orange-300 flex-grow">tabel test 2</div>
              <div className="bg-orange-400">test 3</div>
            </div>
          </div>
        </div>
        {/* end dashboard */}
      </div>
    </div>
  );
};

export default ManagementAdmin;
