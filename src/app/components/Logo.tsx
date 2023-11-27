import React from "react";
import Image from "next/image";

const Logo = ({ active = true }: { active?: boolean }) => {
  return (
    <div
      className={`flex justify-center  ${
        active ? "hover:cursor-pointer" : "hover:cursor-default"
      }`}
    >
      <p className="font-semibold text-3xl">lobe</p>
      <Image src={"/icon.png"} alt="Logo" width={30} height={30} />
    </div>
  );
};

export default Logo;
