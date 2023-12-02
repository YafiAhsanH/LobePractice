import Link from "next/link";
import React from "react";

const NavbarItem = ({
  text,
  classes,
  hamburger = false,
  hamburgerActive = false,
}: {
  text: string;
  classes?: string;
  hamburger?: boolean;
  hamburgerActive?: boolean;
}) => {
  return (
    <div
      className={
        hamburger
          ? `hover:cursor-pointer text-my-gray hover:text-my-black font-semibold transition duration-[500ms] py-4 text-xl ${
              hamburgerActive ? `opacity-100` : `opacity-0`
            }`
          : `hover:cursor-pointer text-my-gray hover:text-my-black font-semibold hover:scale-110 transition duration-[400ms] px-6`
      }
    >
      <Link href={`/${text.toLowerCase()}`}>{text}</Link>
    </div>
  );
};

export default NavbarItem;
