import React from "react";
import icons from "../ultis/icon";
import Search from "./Search";
import { Login } from "../containers/public";
const { BsArrowLeft, BsArrowRight } = icons;
const HeaderMain = () => {
  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] px-[59px] flex items-center">
        <div className="flex justify-between w-full text-[#bdbdbd]">
          <div className="flex w-full gap-6">
            <div className="flex gap-3 items-center">
              <span>
                <BsArrowLeft size={22} />
              </span>
              <span>
                <BsArrowRight size={22} />
              </span>
            </div>
            <div className="w-1/2">
              <Search />
            </div>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
