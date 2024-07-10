import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/input";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";

const Dashboard = () => {
  const mapref = useRef<L.Map | null>(null);

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
            <p className="text-white text-base font-normal">Admin PUPR</p>
            <button className="ml-3 mr-4">
              <img src="/assets/drop-down-icon.png" />
            </button>
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

        <div className="w-full min-h-0 flex flex-col">
          <div className="flex-1 flex m-4 gap-4">
            {/* start sidebar 2 */}
            <div className="w-72 h-full flex flex-col rounded-lg shadow-full p-2">
              <h3 className="text-base font-bold text-black flex text-center justify-center my-2">
                Data GIS
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="text"
                  placeholder="Januari"
                  className="h-7 rounded-md font-normal text-xs text-black"
                />
                <Input
                  type="text"
                  placeholder="2024"
                  className="h-7 rounded-md font-normal text-xs text-black"
                />
              </div>
              <div className="my-2 space-y-2">
                <Input
                  type="text"
                  placeholder="BBWS Pompengan Janeberang"
                  className="h-8 rounded-md font-normal text-xs text-black"
                />
                <Input
                  type="text"
                  placeholder="WS Janeberang"
                  className="h-8 rounded-md font-normal text-xs text-black"
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
              <Button className="bg-[#7d7d7d]  hover:bg-[#2373eb] w-full rounded-md">
                <div className="flex gap-2 items-center justify-center">
                  <img src="/assets/download-icon.png" className="w-6 h-auto" />
                  <p className="font-normal text-sm text-white">Download</p>
                </div>
              </Button>
            </div>
            {/* end sidebar 2 */}

            {/* start main dashboard */}
            <div className="w-full flex flex-col space-y-2">
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-[#2373eb] rounded-md p-2 space-y-2">
                  <div className="flex justify-between items-center text-white font-normal text-base">
                    <h3>Pos Duga Air (PDA)</h3>
                    <p className="font-bold">42</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-xs justify-between">
                    <div className=" bg-[#5ec95d] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Normal</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">21</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f78145] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Siaga</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">31</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f52a3b] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Waspada</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2373eb] rounded-md p-2 space-y-2">
                  <div className="flex justify-between items-center text-white font-normal text-base">
                    <h3>Pos Curah Hujan (PCH)</h3>
                    <p className="font-bold">42</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-xs justify-between">
                    <div className=" bg-[#5ec95d] flex-1 rounded-md">
                      <div className="flex items-center  justify-between gap-2 m-1">
                        <h4>Normal</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">21</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f78145] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Siaga</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">31</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f52a3b] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Waspada</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2373eb] rounded-md p-2 space-y-2">
                  <div className="flex justify-between items-center text-white font-normal text-base">
                    <h3>ARR</h3>
                    <p className="font-bold">42</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-xs justify-between">
                    <div className=" bg-[#5ec95d] flex-1 rounded-md">
                      <div className="flex items-center  justify-between gap-2 m-1">
                        <h4>Normal</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">21</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f78145] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Siaga</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">31</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f52a3b] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Waspada</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2373eb] rounded-md p-2 space-y-2">
                  <div className="flex justify-between items-center text-white font-normal text-base">
                    <h3>AWLR</h3>
                    <p className="font-bold">42</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-xs justify-between">
                    <div className=" bg-[#5ec95d] flex-1 rounded-md">
                      <div className="flex items-center  justify-between gap-2 m-1">
                        <h4>Normal</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">21</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f78145] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Siaga</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">31</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#f52a3b] flex-1 rounded-md">
                      <div className="flex items-center justify-between gap-2 m-1">
                        <h4>Waspada</h4>
                        <div className="bg-[#bad7e8] flex items-center justify-center w-5 h-5 rounded-md">
                          <p className="font-bold text-xs text-black">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 rounded-md">
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Pos Klimatologi</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Situ</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Danau</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Embung</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Bendungan</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Bendung</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 rounded-md">
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Tanggul</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Titik Sungai Kritis</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Titik Tanggul Kritis</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Sungai</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Realisasi Tanam</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-xs font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Genangan Banjir</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 rounded-md w-full flex-1">
                <div id="map" />
              </div>
            </div>
            {/* end main dashboard */}
          </div>
        </div>
      </div>
      {/* end dashboard */}
    </div>
  );
};

export default Dashboard;
