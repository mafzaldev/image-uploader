import { useReducer } from "react";
import UploadImage from "./components/UploadImage";
import Loading from "./components/Loading";
import CopyImage from "./components/CopyImage";
import { API_URL } from "./utils";

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
  const initialState = { uploading: false, image: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputHandler = async (pickedImage) => {
    const formData = new FormData();
    formData.append("image", pickedImage);

    dispatch({ type: "UPLOADING" });
    // await new Promise((r) => setTimeout(r, 5000));

    try {
      fetch(`${API_URL}/postImage`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_IMAGE", imagePayLoad: data });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-center h-screen">
      <div className="gap-4 text-lg w-[402px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl flex-center py-8">
        {!state.uploading && <UploadImage onInput={onInputHandler} />}
        {state.uploading && !state.image && (
          <Loading onInput={onInputHandler} />
        )}
        {state.image && <CopyImage data={state.image} />}
      </div>
    </div>
  );
}

export default App;
