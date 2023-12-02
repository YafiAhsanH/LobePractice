import React from "react";

const PageDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-my-black text-lg lg:text-2xl px-[5%] lg:px-[30%] py-4">{children}</p>;
};

export default PageDescription;
