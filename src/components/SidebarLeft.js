import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink, useNavigate } from "react-router-dom";
import path from '../ultis/path'

const activeStyle =
  "py-2 px-[25px] font-semibold flex items-center gap-4 text-white text-[14px]";
const notActiveStyle =
  "py-2 px-[25px] font-semibold flex items-center gap-4 text-[#bdbdbd] text-[14px]";

const SidebarLeft = () => {

  const navigate = useNavigate()

  return (
    <div className="h-full">
      <div onClick={() => navigate(path.HOME)} className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt={logo} className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
