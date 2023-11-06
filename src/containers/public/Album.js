import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import * as apis from "../../apis";
import { ListSong } from "../../components";

const Album = () => {
  const { title, pid } = useParams();
  console.log({ title, pid });
  const [playlistData, setplaylistData] = useState({});
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      console.log(response);
      if (response?.data.err === 0) {
        setplaylistData(response.data?.data);
      }
    }

    fetchDetailPlaylist();
  }, [pid]);
  console.log(playlistData.song.items);
  console.log(playlistData);
  return (
    <div className="py-5 px-[59px] text-white w-full">
      <div className="flex gap-8 max-md:flex-col">
        <div className="xl:flex-none xl:w-1/5 flex-col flex items-center">
          <img
            src={playlistData?.thumbnailM}
            alt="thumbnaiM"
            className="w-full object-contain rounded-md shadow-md"
          />
          <h3 className="text-[20px] pt-2">{playlistData?.title}</h3>
          <div className="text-[12px] text-color-detail-playlist">
            <span>Cập Nhật :</span>
            <span className="px-2">
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </div>
          <span className="text-[12px] text-color-detail-playlist">
            {playlistData?.artistsNames}
          </span>
          <span className="text-[12px] text-color-detail-playlist">
            {Math.round(playlistData?.like / 1000)}K người yêu thích
          </span>
        </div>
        <div className="xl:flex-auto h-[570px] overflow-y-auto">
          <div className="title flex gap-2">
            <div className="text-[14px] text-color-detail-playlist flex items-center">
              Lời tựa
            </div>
            <div className="flex items-center">
              {playlistData?.sortDescription}
            </div>
          </div>
          <ListSong
            songs={playlistData?.song?.items}
            totalDuration={playlistData?.song.totalDuration}
          />
        </div>
      </div>
    </div>
  );
};

export default Album;
