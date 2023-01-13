import { useReducer } from "react";
import UploadImage from "./components/UploadImage";
import Loading from "./components/Loading";
import CopyImage from "./components/CopyImage";

import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "UPLOADING": {
      return {
        ...state,
        uploading: (prev) => !prev,
      };
    }
    case "SET_IMAGE": {
      return {
        ...state,
        image: action.imagePayLoad,
      };
    }
  }
  throw Error("Unknown action.");
}

function App() {
  const initialState = {
    uploading: false,
    image: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputHandler = async (pickedFile) => {
    console.log(import.meta.env.VITE_UPLOAD_PRESET);
    const formData = new FormData();
    formData.append("file", pickedFile);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    const options = {
      method: "POST",
      body: formData,
    };

    dispatch({ type: "UPLOADING" });

    // await new Promise((r) => setTimeout(r, 2000));

    fetch("https://api.Cloudinary.com/v1_1/duidlslzh/image/upload", options)
      .then((response) => response.json())
      .then((imageData) => {
        dispatch({ type: "SET_IMAGE", imagePayLoad: imageData.secure_url });
        dispatch({ type: "UPLOADING" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-center h-screen">
      <div className="gap-4 text-lg w-[402px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl flex-center py-8">
        {!state.uploading && <UploadImage onInput={onInputHandler} />}
        {state.uploading && !state.image && <Loading />}
        {state.image && <CopyImage imageURL={state.image} />}
      </div>
    </div>
  );
}

export default App;
