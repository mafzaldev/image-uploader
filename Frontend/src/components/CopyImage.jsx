import React, { useState } from "react";
import Button from "./Button";
import tick from "../assets/tick.svg";

const SERVER_ADDRESS = "http://localhost:3000/";

const CopyImage = ({ data }) => {
  return (
    <>
      <img src={tick} alt="tick" />
      <h1 className="font-medium text-[#4F4F4F]">Uploaded Successfully!</h1>
      <div className="h-56 w-80 bg-[#F6F8FB] border-[1px] border-dashed border-[#97BEF4] rounded-xl">
        <img
          src={`${SERVER_ADDRESS}${data.imageURL}`}
          alt=""
          className="h-56 w-80 object-contain"
        />
      </div>
      <div className="w-80 h-9 flex justify-center items-center border-[1px] border-solid border-[#E0E0E0] rounded-lg truncate">
        <span className="w-56 text-xs font-medium text-[#4F4F4F] truncate">
          {`${SERVER_ADDRESS}${data.imageURL}`}
        </span>
        <Button
          onClick={() =>
            navigator.clipboard.writeText(`${SERVER_ADDRESS}${data.imageURL}`)
          }
        >
          Copy Link
        </Button>
      </div>
    </>
  );
};

export default CopyImage;
