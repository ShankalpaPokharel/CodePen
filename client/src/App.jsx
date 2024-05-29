import { useState } from "react";
import LandingPage from "./components/pages/LandingPage";
import CodeEditorPage from "./components/pages/CodeEditorPage";

function App() {

    return (
        <div className="font-lato ">
              {/* <LandingPage/> */}
              <CodeEditorPage/>
        </div>
      
    );
}

export default App;
