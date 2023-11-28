import React from "react";

const PageDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-my-black text-2xl px-[30%] py-4">{children}</p>;
};

export default PageDescription;
