import React from "react";
import NavbarItem from "./NavbarItem";
import Button from "../Button";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-[5rem] flex bg-my-white bg-opacity-75 backdrop-blur-md w-full justify-between items-center px-16 z-50">
      <Logo />
      <div className="flex items-center">
        <NavbarItem text="Overview" />
        <NavbarItem text="Examples" />
        <NavbarItem text="Tour" />
        <NavbarItem text="Blog" />
        <NavbarItem text="Help" />
      </div>
      <Button>Download</Button>
    </div>
  );
};

export default Navbar;
