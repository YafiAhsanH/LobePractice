import React from "react";

const Card = ({title, desc, date, imgUrl}: {title: string, desc: string, date: string, imgUrl: string}) => {
  return (
    <div
      className="bg-my-white flex flex-col rounded-3xl min-h-[33rem] hover:cursor-pointer hover:scale-[1.01] 
      shadow-[0_40px_90px_-15px_rgba(0,0,0,0.3)] transition duration-[400] h-full mb-16"
    >
      <div
        className="h-1/2 bg-cover rounded-t-3xl"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="h-1/2 text-left p-8 text-my-black rounded-b-3xl flex flex-col">
        <p className="font-bold text-[1.4rem] pb-2">
          {title}
        </p>
        <p className=" text-[1.4rem] flex-1">
          {desc}
        </p>
        <p className=" text-gray-400 font-medium text-xl h-fit">
          Release &#8226; {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
