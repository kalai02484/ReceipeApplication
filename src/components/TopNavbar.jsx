import React from "react";
import logo from "../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { FcHome, FcLike } from "react-icons/fc";

const TopNavbar = () => {
  return (
    <div className="w-full border-b-2 border-amber-500">
      <Navbar
        fluid
        rounded
        className="mx-auto max-w-7xl"
      >
        <NavbarBrand to="/">
          <img src={logo} className="mr-2 sm:mr-3 h-14 sm:h-18" alt="Logo" />
        </NavbarBrand>
        <div className="flex">
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" className="mr-4 hover:text-amber-600">
           <FcHome className="mr-2 text-xl inline align-bottom"/> Home
          </NavbarLink>
          <NavbarLink href="#" className="hover:text-amber-600"><FcLike className="mr-2 text-xl inline align-bottom"/>Favorites</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
