import React from "react";
import Button from "./Button";
const CarouselCard = (props) => {
  return (
    <div className=" backdrop backdrop-blur-lg bg-white bg-opacity-5 text-white border border-slate-800 shadow-lg rounded-xl py-20 2xl:px-5 px-3 w-full h-full">
      {props.img && (
        <img src={props.img} className="w-10 h-auto " alt="illus-time" />
      )}
      <p className={`lexend font-bold pt-4 pb-7 text-4xl`}>{props.title}</p>
      <p className="lexend text-xl w-1/2 font-thin">{props.text}</p>
      <div className="absolute -right-20">
        <Button
          className="bg-[#3658C1] border-none lexend"
          text="get funded"
          showArrow={true}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
