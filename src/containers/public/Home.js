import React, { useEffect } from "react";
import { HeaderMain, Slider } from "../../components";

const Home = () => {
  return (
    <div className="overflow-y-auto bg-[#221a2d]">
      <div className="h-[70px] px-[59px] flex items-center">
        <HeaderMain />
      </div>
      <div className="py-5 px-[59px]">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
