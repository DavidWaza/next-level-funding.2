import React from "react";
import Button from "./Button";

const PriceCard = (props) => {
  return (
    <div
      className={`price-card-morph w-full text-center py-4 px-3 ${props.className}`}
    >
      <p className="space-grotesk text-xl font-bold uppercase">
        {props.packageNum}
      </p>
      <p className="space-grotext text-2xl font-bold uppercase">Evaluation</p>
      <p className="lexend text-xm font-light mt-5">
        A $10,000 One Step Evaluation <br />
        Account
      </p>
      <p className="text-5xl font-bold space-grotesk mt-5">{props.value}</p>
      <div className="grid text-start justify-center">
      <p className="bullet-point uppercase mt-2 text-sm">{props.listOne}</p>
      <p className="bullet-point uppercase mt-2 text-sm">{props.listTwo}</p>
      <p className="bullet-point uppercase mt-2 text-sm">{props.listThree}</p>
      <p className="bullet-point uppercase mt-2 text-sm">{props.listFour}</p>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          className="backdrop-filter bg-[#991275] border-none mt-3"
          text="pay now"
        />
      </div>
      <p className="text-white w-3/4 text-center m-auto mt-5">
        * Please check{" "}
        <span className={`text-blue-700 underline ${props.spanClassName}`}>
          Trading Rules
        </span>{" "}
        page for more info *
      </p>
    </div>
  );
};

export default PriceCard;
