import React, { useState } from "react";
import Button from "./Button";
import tick from "../assets/tick.svg";

const CopyImage = ({ imageURL, dispatch }) => {
  return (
    <>
      <img src={tick} alt="tick" />
      <h1 className="font-medium text-[#4F4F4F]">Uploaded Successfully!</h1>
      <div className="h-56 bg-[#F6F8FB] rounded-xl">
        <img src={imageURL} alt="" className="h-56 object-contain" />
      </div>
      <div className="w-80 h-9 flex justify-center items-center border-[1px] border-solid border-[#E0E0E0] rounded-lg truncate">
        <span className="w-56 text-xs font-medium text-[#4F4F4F] truncate">
          {imageURL}
        </span>
        <Button onClick={() => navigator.clipboard.writeText(imageURL)}>
          Copy Link
        </Button>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "SET_IMAGE", imagePayLoad: null });
        }}
      >
        Upload another image
      </Button>
    </>
  );
};

export default CopyImage;
