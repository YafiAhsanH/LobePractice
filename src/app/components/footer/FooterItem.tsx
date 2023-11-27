import React from "react";

const FooterItem = ({
  children,
  active = true,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <p
      className={`text-my-black ${
        active && "hover:cursor-pointer hover:scale-105"
      } transition duration-[400ms] py-3`}
    >
      {children}
    </p>
  );
};

export default FooterItem;
