import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex bg-[#221a2d]">
      <div className="w-[240px] flex-none border border-blue-500 bg-[#2c2537]">
        <SidebarLeft />
      </div>
      <div className="flex-auto border border-red-500">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none border border-green-500 text-white bg-[#120822]">
        <SidebarRight />
      </div>
    </div>
  );
};

export default Public;
