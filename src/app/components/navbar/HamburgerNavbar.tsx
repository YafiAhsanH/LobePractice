import React from "react";
import NavbarItem from "./NavbarItem";
import Button from "../Button";

const HamburgerNavbar = ({ hamburger }: { hamburger: boolean }) => {
  return (
    <div
      className={`fixed top-[5rem] flex flex-col bg-my-white bg-opacity-75 backdrop-blur-md w-full items-left px-8 lg:px-16 py-4 z-50 transition ease-out duration-[400] origin-top ${
        hamburger ? `scale-y-100` : `scale-y-0`
      } lg:hidden`}
    >
      <NavbarItem
        text="Overview"
        hamburger={true}
        hamburgerActive={hamburger}
      />
      <NavbarItem
        text="Examples"
        hamburger={true}
        hamburgerActive={hamburger}
      />
      <NavbarItem text="Tour" hamburger={true} hamburgerActive={hamburger} />
      <NavbarItem text="Blog" hamburger={true} hamburgerActive={hamburger} />
      <NavbarItem text="Help" hamburger={true} hamburgerActive={hamburger} />
      <div className="flex justify-center w-full py-6">
        <Button classes="rounded-full py-3 px-5 w-full text-center">
          Download
        </Button>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
