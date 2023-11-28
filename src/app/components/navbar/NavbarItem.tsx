import Link from "next/link";
import React from "react";

const NavbarItem = ({ text }: { text: string }) => {
  return (
    <div className="px-6 hover:cursor-pointer text-my-gray hover:text-my-black font-semibold hover:scale-110 transition duration-[400ms] ">
      <Link href={`/${text.toLowerCase()}`}>{text}</Link>
    </div>
  );
};

export default NavbarItem;
