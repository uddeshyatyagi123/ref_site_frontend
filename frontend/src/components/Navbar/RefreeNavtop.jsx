import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const RefreeNavtop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <NavbarMenu className="pb-4">
        <NavbarMenuItem className=" flex flex-col gap-2">
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
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default RefreeNavtop;
