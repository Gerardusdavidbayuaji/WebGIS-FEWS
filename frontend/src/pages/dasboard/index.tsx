const Dashboard = () => {
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
            <div className="w-72 grow rounded-lg shadow-full">
              <h3 className="text-base font-bold text-black flex text-center justify-center my-3">
                Data GIS
              </h3>
            </div>
            {/* end sidebar 2 */}

            {/* start main dashboard */}
            <div className="w-full flex flex-col space-y-2">
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-[#2373eb] rounded-md p-2 space-y-2">
                  <div className="flex justify-between items-center text-white font-normal text-base">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p className=" font-bold">12</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-sm justify-between">
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
                    <h3>Lorem ipsum dolor sit</h3>
                    <p className=" font-bold">12</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-sm justify-between">
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
                    <h3>Lorem ipsum dolor sit</h3>
                    <p className=" font-bold">12</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-sm justify-between">
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
                    <h3>Lorem ipsum dolor sit</h3>
                    <p className=" font-bold">12</p>
                  </div>
                  <div className="flex gap-2 text-white font-normal text-sm justify-between">
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
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Pos Klimatologi</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Situ</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Danau</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Embung</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Bendungan</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Bendung</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 rounded-md">
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Tanggul</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Titik Sungai Kritis</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Titik Tanggul Kritis</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Sungai</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Realisasi Tanam</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#bad7e8] rounded-md text-base font-semibold text-black">
                  <div className="flex items-center justify-between gap-2 m-1">
                    <h4>Genangan Banjir</h4>
                    <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                      <p className="font-bold text-xs text-black">21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 rounded-md w-full flex-1"></div>
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
