"use client";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import Button from "../Button";
import Logo from "../Logo";
import Image from "next/image";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <div className="sticky top-0 h-[5rem] flex bg-my-white bg-opacity-75 backdrop-blur-md w-full justify-between items-center px-8 lg:px-16 z-50">
        <Logo />
        <div className="lg:flex items-center hidden">
          <NavbarItem text="Overview" />
          <NavbarItem text="Examples" />
          <NavbarItem text="Tour" />
          <NavbarItem text="Blog" />
          <NavbarItem text="Help" />
        </div>
        <div className="hidden lg:block">
          <Button>Download</Button>
        </div>
        <div
          className="lg:hidden block"
          onClick={() => setHamburger(!hamburger)}
        >
          <div
            className={`bg-slate-200 py-2 px-2 rounded-full hover:cursor-pointer hover:scale-105 transition duration-[400ms] h-fit`}
          >
            <Image
              src={"/closeIcon.png"}
              alt="Close Icon"
              width={25}
              height={25}
              className={`rounded-3xl hover:cursor-pointer hover:scale-105 transition duration-[400] hover:shadow-[0_40px_90px_-15px_rgba(0,0,0,0.3)] ${
                hamburger ? `opacity-100 h-fit` : `opacity-0 h-0`
              }`}
            />
            <Image
              src={"/hamburgerIcon.png"}
              alt="Hamburger Icon"
              width={25}
              height={25}
              className={`rounded-3xl hover:cursor-pointer hover:scale-105 transition duration-[400] hover:shadow-[0_40px_90px_-15px_rgba(0,0,0,0.3)] ${
                hamburger ? `opacity-0 h-0` : `opacity-100 h-fit`
              }`}
            />
          </div>
        </div>
      </div>
      <HamburgerNavbar hamburger={hamburger} />
    </>
  );
};

export default Navbar;
