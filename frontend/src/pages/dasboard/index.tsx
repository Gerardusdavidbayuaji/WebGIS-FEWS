const Dashboard = () => {
  return (
    <div className="bg-slate-400 text-lg font-bold h-screen w-full flex flex-col">
      {/* start navbar */}
      <div className="bg-[#1c60c7] w-full p-2">
        <div className="flex gap-3 justify-end">
          <div className="flex items-center justify-center w-8 h-8 m-2 rounded-full outline outline-[#4D93FD] outline-2 cursor-pointer">
            <img src="/assets/notification.png" className="flex w-4 h-auto" />
          </div>
          <div className="bg-[#4D93FD] rounded-full flex items-center justify-center gap-2">
            <img
              src="/assets/logo_pupr.jpg"
              className="w-6 h-auto ml-2 rounded-full"
            />
            <p className="text-white text-base font-normal">Admin PUPR</p>
            <button className="ml-3 mr-4">
              <img src="/assets/drop_down.png" />
            </button>
          </div>
        </div>
      </div>
      {/* end navbar */}

      {/* start dashboard */}
      <div className="flex flex-grow min-h-0">
        <div className="w-14 bg-red-400">tes 1</div>
        <div className="w-full bg-lime-400">tes 2</div>
      </div>
      {/* end dashboard */}
    </div>
  );
};

export default Dashboard;
