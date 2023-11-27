import React from "react";

const Button = ({
  children,
  classes = "py-3 px-5",
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div
      className={`bg-my-green ${
        classes && classes
      } rounded-full hover:cursor-pointer hover:scale-105 transition duration-[400ms] h-fit`}
    >
      <p className="text-my-white font-bold ">{children}</p>
    </div>
  );
};

export default Button;
