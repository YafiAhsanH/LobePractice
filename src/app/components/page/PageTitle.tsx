import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-my-black font-bold text-6xl">
      Lobe <span className="text-my-green">{title}</span>
    </p>
  );
};

export default PageTitle;
