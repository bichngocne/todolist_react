import React from "react";
import icons from "../ultis/icon";
const { AiOutlineSearch } = icons;
const Search = () => {
  return (
    <div className="w-full flex items-center">
      <span className="h-10 px-4 bg-[hsla(0,0%,100%,0.1)] flex items-center justify-center rounded-l-[20px]">
        <AiOutlineSearch size={20}/>
      </span>
      <input
        type="text"
        className="outline-none rounded-r-[20px] h-[40px] bg-[hsla(0,0%,100%,0.1)] w-full
        text-gray-200
        "
        placeholder="Tìm kiếm bài hát nghệ sĩ, lời bài hát ..."
      />
    </div>
  );
};

export default Search;
