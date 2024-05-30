import React, { useState,useEffect } from "react";
import CodeEditorHeader from "../CodeEditorHeader";
import DynamicDiv from "../DynamicDiv"

export default function CodeEditorPage() {
  const [activeDiv, setActiveDiv] = useState(1);
  const [direction, setDirection] = useState("vertical");
  const [btn, setBtn] = useState(false);
  const [htmlCode, setHtmlCode] = useState("<div>Hello, world!</div>");
  const [cssCode, setCssCode] = useState("body { background-color: #f0f0f0; }");
  const [jsCode, setJsCode] = useState('console.log("Hello, world!");');
  const [layout, setLayout] = useState(1)

  const handleScreenSizeChange = () => {
    if (window.innerWidth <= 768) {
        setDirection("vertical");
      setBtn(false);
      setLayout(1);
    }
  };

  useEffect(() => {
    // Initial check for screen size
    handleScreenSizeChange();

    // Add event listener for screen resize
    window.addEventListener("resize", handleScreenSizeChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);
  console.log((layout))


  const handleButtonClick = (divNumber) => {
    setActiveDiv(divNumber);
    if (divNumber === 1) {
      setDirection("vertical");
      setBtn(false);
      setLayout(1);
    } else if (divNumber === 2) {
      setDirection("horizontal");
      setBtn(false);
      setLayout(2);
    } else if (divNumber === 3) {
      setDirection("horizontal");
      setBtn(true);
      setLayout(3);
    }
  };

  const generateWeb = () => {
    return `
        <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
        </html>
      `;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CodeEditorHeader />
  
      {/* <div className="text-green-700">
        <button onClick={() => handleButtonClick(1)}>Button 1</button>
        <button onClick={() => handleButtonClick(2)}>Button 2</button>
        <button onClick={() => handleButtonClick(3)}>Button 3</button>
      </div> */}
  
      <div className={`flex-1 border-t-[0.5px] border-gray-700`}>
          <DynamicDiv
            layout={layout}
            direction={direction}
            btn={btn}
            htmlCode={htmlCode}
            cssCode={cssCode}
            jsCode={jsCode}
            onHtmlChange={(val) => setHtmlCode(val)}
            onCssChange={(val) => setCssCode(val)}
            onJsChange={(val) => setJsCode(val)}
            generateWeb={generateWeb}
            
          />
      </div>
    </div>
  );
}

