import { useState } from "react";
import UploadImage from "./components/UploadImage";
import Loading from "./components/Loading";
import CopyImage from "./components/CopyImage";

import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-center h-screen">
      <div className="gap-4 text-lg w-[402px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl flex-center py-8">
        <UploadImage />
      </div>
    </div>
  );
}

export default App;
