import React from "react";
import { useSelector } from "react-redux";
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  console.log(banner);
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {banner?.map((item) => (
        <div className="hover:scale-110 ease-in-out duration-300">
          <img
            src={item.banner}
            key={item.encodeId}
            className="flex-1 object-contain w-100 rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
