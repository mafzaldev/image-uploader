import { useState } from "react";
import UploadImage from "./components/UploadImage";
import Loading from "./components/Loading";
import CopyImage from "./components/CopyImage";

import "./App.css";
function App() {
  const onInputHandler = async (pickedImage) => {
    const formData = new FormData();
    formData.append("image", pickedImage);

    try {
      fetch("http://localhost:3000/postImage", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-center h-screen">
      <div className="gap-4 text-lg w-[402px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl flex-center py-8">
        <UploadImage onInput={onInputHandler} />
      </div>
    </div>
  );
}

export default App;
