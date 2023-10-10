import React from "react";
// export default Slider;
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useSelector } from "react-redux";
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  console.log(banner);

  return (
    <Splide
      options={{
        type: "loop",
        rewind: true,
        gap: "1rem",
        perPage: 3,
        perMove: 1,
        rewindSpeed: 1000,
        breakpoints: {
          640: {
            perPage: 2,
          },
        },
        autoplay: true, // Bật chế độ autoplay
        interval: 3000,
      }}
    >
      {banner?.map((item) => (
        <SplideSlide key={item.encodeId}>
          <img
            src={item.banner}
            key={item.encodeId}
            className="flex-1 object-contain w-100 rounded-xl "
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
