import React from "react";
import { List } from "./";
const ListSong = ({ songs, totalDuration }) => {
  console.log({ songs, totalDuration });
  return (
    <div className="w-full">
      <table class="table-fixed w-full">
        <thead>
          <tr className="text-color-detail-playlist text-left text-[12px]">
            <th>BÀI HÁT</th>
            <th>ALBUM</th>
            <th>THỜI GIAN</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map(item => (
            <List key={item.encodeId} songData={item}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
