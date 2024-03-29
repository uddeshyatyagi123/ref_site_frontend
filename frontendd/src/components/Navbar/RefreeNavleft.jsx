import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const RefreeNavleft = () => {
  return (
    <aside
      id="default-sidebar"
      className="lg:flex hidden z-4 fixed px-3 py-10 w-60 h-screen border-r-2"
      aria-label="Sidebar"
    >
      <ScrollShadow hideScrollBar className="flex flex-col gap-52 w-full pb-40">
        <ul className="font-bold flex flex-col gap-6 text-md">
          <li>
            <NavLink
              to="applications"
              className={({ isActive }) =>
                `text-black text-center rounded-lg flex items-center p-3 ${
                  isActive && "bg-blue-400"
                } ${!isActive && "hover:bg-zinc-300"}`
              }
            >
              List of Applications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="uploadproofs"
              className={({ isActive }) =>
                `text-black text-center rounded-lg flex items-center p-3 ${
                  isActive && "bg-blue-400"
                } ${!isActive && "hover:bg-zinc-300"}`
              }
            >
              Upload Proofs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `text-black text-center rounded-lg flex items-center p-3 ${
                  isActive && "bg-blue-400"
                } ${!isActive && "hover:bg-zinc-300"}`
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </ScrollShadow>
    </aside>
  );
};

export default RefreeNavleft;
