import React from "react";
import Logo from "../Logo";

const FooterColumn = ({
  children,
  title,
  classes
}: {
  children: React.ReactNode;
  title?: string;
  classes?: string;
}) => {
  return (
    <div className={`flex flex-col lg:items-start items-center flex-[50%] lg:flex-auto pb-16 ${classes}`}>
      {title ? (
        <p className="font-semibold pb-5">{title}</p>
      ) : (
        <div className="pb-2">
          <Logo active={false} />
        </div>
      )}
      {children}
    </div>
  );
};

export default FooterColumn;
