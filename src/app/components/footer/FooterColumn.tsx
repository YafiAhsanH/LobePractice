import React from "react";
import Logo from "../Logo";

const FooterColumn = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="flex flex-col items-start">
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
