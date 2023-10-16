import React from "react";
// export default Slider;
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions'
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch()

const handelClickBanner = (item) =>{
  console.log(item);
  if(item?.type === 1){
    dispatch(actions.setCurSongId(item.encodeId))
    dispatch(actions.play(true))
  }
}

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
            onClick={()=> handelClickBanner(item)}
            className="flex-1 object-contain w-100 rounded-xl "
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
