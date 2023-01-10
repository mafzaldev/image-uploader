import React, { useRef } from "react";
import Image from "../assets/image.svg";
import Button from "./Button";

const UploadImage = () => {
  const fileRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files[0]);
  };

  return (
    <>
      <h1 className="font-medium text-[#4F4F4F]">Upload your Image</h1>
      <div className="text-xs	text-[#828282]">File should be jpeg or png</div>
      <div
        className="flex-center gap-5 h-56 w-80 bg-[#F6F8FB] border-[1px] border-dashed border-[#97BEF4] rounded-xl"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={Image} alt="" />
        <div className="text-xs	text-[#BDBDBD]">Drag & Drop your image here</div>
      </div>
      <input type="file" hidden accept="image/png, image/jpeg" ref={fileRef} />
      <Button onClick={() => fileRef.current.click()}>Choose a file</Button>
    </>
  );
};

export default UploadImage;
