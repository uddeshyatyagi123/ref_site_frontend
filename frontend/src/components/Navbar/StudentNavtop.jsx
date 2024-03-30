import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Avatar,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const StudentNavtop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="lg:hidden flex"
      isBordered
    >
      <NavbarContent className="lg:hidden text-black" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="center">
        <NavbarBrand>
          <Avatar name="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>

      <NavbarMenu className="pb-4 h-screen">
        <NavbarMenuItem className=" flex flex-col gap-2">
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
            className="bg-blue-400 mt-32 self-center font-bold text-md"
            onClick={logout}
          >
            Logout
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default StudentNavtop;
