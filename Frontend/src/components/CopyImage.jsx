import React from "react";
import Button from "./Button";

import tick from "../assets/tick.svg";

const CopyImage = () => {
  const myStyle = {
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <img src={tick} alt="tick" />
      <h1 className="font-medium text-[#4F4F4F]">Uploaded Successfully!</h1>
      <div
        className="bg-cover	h-56 w-80 bg-[#F6F8FB] border-[1px] border-dashed border-[#97BEF4] rounded-xl"
        style={myStyle}
      ></div>
      <div className="w-80 h-9 flex justify-center items-center border-[1px] border-solid border-[#E0E0E0] rounded-lg truncate">
        <span className="w-56 text-xs text-[#4F4F4F] truncate">
          https://www.figma.com/file/NxbZm3CAovYh89dFXe7EOw/Image-Uploader?node-id=1%3A52&t=GbOIDXbFT9yRqXXh-0
        </span>
        <Button>Copy Link</Button>
      </div>
    </>
  );
};

export default CopyImage;
