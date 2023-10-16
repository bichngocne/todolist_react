import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight } from "../../components";
const Public = () => {
  return (
    <div className="w-full relative min-h-screen overflow-y-hidden flex-col flex bg-main">
      <div className="w-full flex flex-auto">
        <div className="w-[240px] min-h-screen flex-none bg-sidebarleft">
          <SidebarLeft />
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
        <div className="w-[329px] max-lg:hidden flex-none absolute top-0 right-0 z-40 h-screen text-white bg-sidebarright">
          <SidebarRight />
        </div>
      </div>
      <div className="flex-none absolute bottom-0 h-[90px] w-full z-40 bg-player">
        <Player/>
      </div>
    </div>
  );
};

export default Public;
