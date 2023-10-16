import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icon";
const {
  AiOutlineHeart,
  AiFillHeart,
  BsThreeDots,
  IoRepeatOutline,
  RxTrackNext,
  LiaStepBackwardSolid,
  PiShuffle,
  BsPlayCircle,
  BsPauseCircle,
} = icons;

const Player = () => {
  const audioEl = new Audio('');

  const { curSongId } = useSelector((state) => state.music);

  const [songInfo, setsongInfo] = useState(null);
  const [isPlaying, setisPlaying] = useState(null);
  console.log(isPlaying);
  const [isHeart, setisHeart] = useState(null);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);
      console.log(response);
      if (response.data.err === 0) {
        setsongInfo(response.data.data);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(()=>{
  },[curSongId])
  const handelTogglePlayMusic = () => {
    setisPlaying((pre) => !pre);
  };
  const handelToggleHeart = () => {
    setisHeart((pre) => !pre);
  };
  return (
    <div className="px-5 h-full grid xl:grid-cols-3  text-white">
      <div className="flex items-center">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        ></img>
        <div className="flex flex-col gap-2 px-4">
          <span className="font-semibold">
            {songInfo?.title || "Name Music"}
          </span>
          <span className="text-sm text-white-50">
            {songInfo?.artistsNames || "Author"}
          </span>
        </div>
        <div className="px-5 flex gap-5">
          <span onClick={handelToggleHeart}>
            {isHeart ? <AiOutlineHeart size={16} /> : <AiFillHeart size={16} />}
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 center items-center w-full h-full justify-center">
        <div className="flex gap-5 items-center">
          <span title="Bật phát ngẫu nhiên" className="cursor-pointer ">
            <PiShuffle size={26} />
          </span>
          <span className="cursor-pointer">
            <LiaStepBackwardSolid size={26} />
          </span>
          <span
            className="hover:text-link-text-hover cursor-pointer"
            onClick={handelTogglePlayMusic}
          >
            {isPlaying ? (
              <BsPlayCircle size={40} />
            ) : (
              <BsPauseCircle size={40} />
            )}
          </span>
          <span className="cursor-pointer">
            <RxTrackNext size={26} />
          </span>
          <span title="Bật phát lại tất cả" className="cursor-pointer">
            <IoRepeatOutline size={26} />
          </span>
        </div>
        <div className="level-item">
          <div className="time left"></div>
          <div className="zm-duration-bar"></div>
          <div className="time right"></div>
        </div>
      </div>
      <div className="flex justify-end">Volume</div>
    </div>
  );
};

export default Player;
