import React from "react";
import { Button, ScrollShadow } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const StudentNavleft = () => {
  const logout = () => {
    axios({
      method: "GET",
      url: `https://referral-site.onrender.com/api/logout`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("Data logout:", response.data);
        console.log("Button clicked!");
        Cookies.set("status", "false");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <aside
      id="default-sidebar"
      className="lg:flex hidden z-4 fixed px-3 py-10 w-60 h-screen border-r-2"
      aria-label="Sidebar"
    >
      <ScrollShadow hideScrollBar className="flex flex-col w-full pb-40">
        <ul className="font-bold flex flex-col gap-6 text-md">
          <li>
            <NavLink
              to="refrel"
              className={({ isActive }) =>
                `text-black text-center rounded-lg flex items-center p-3 ${
                  isActive && "bg-blue-400"
                } ${!isActive && "hover:bg-zinc-300"}`
              }
            >
              Refrel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="updateprofile"
              className={({ isActive }) =>
                `text-black text-center rounded-lg flex items-center p-3 ${
                  isActive && "bg-blue-400"
                } ${!isActive && "hover:bg-zinc-300"}`
              }
            >
              Profile Update
            </NavLink>
          </li>
        </ul>
        <Button
          variant="shadow"
          className="bg-blue-400 mt-auto self-center font-bold text-md"
          onClick={logout}
        >
          Logout
        </Button>
      </ScrollShadow>
    </aside>
  );
};

export default StudentNavleft;
