import React from "react";
import icons from "../ultis/icon";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from '../store/actions'

const {FiMusic} = icons

const List = ({ songData }) => {
  const dispatch = useDispatch()
  return (
    <tr
    onClick={()=>dispatch(actions.setCurSongId(songData?.encodeId))}
    >
      <td className="text-[14px] flex gap-3 items-center">
        <FiMusic size={16}/>
        <img src={songData?.thumbnail} alt="thumbnail" className="w-[40px] h-[40px] object-contain"/>
        <div className="flex flex-col">
        <div key={songData?.encodeId} className="truncate w-[200px]">{songData?.title}</div>
        <div className="text-color-detail-playlist">{songData?.artistsNames}</div>
        </div>
      </td>
      <td className="text-color-detail-playlist text-[12px]">
       {songData?.album.title}
      </td>
      <td className="text-color-detail-playlist text-[12px]">{moment.utc(songData?.duration*1000).format('HH:mm:ss')}</td>
    </tr>
  );
};

export default List;
