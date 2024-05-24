import React from "react";

import CodeBlock from "./CodeBlock";
import Button from "./common/Button";

export default function LandingPageContent() {
  const htmlCode = `<div class="rect"></div>`;
  const cssCode = `.rect {
        background: linear-gradient(
        -119deg,
        $gray 0%,
        $dark-gray 100%); }`;
  const jsCode = `var colors = ["#74B087","#DE7300","#74B087"];


    function animate() {};`;

  return (
    <div className=" h- bg-[#131417]">
      <div className="container">
        {/* codepen logo */}
        <div className="flex items-center justify-center p-8 lg:hidden">
          <div className="h-[38px]  items-center px-5">
            <svg
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[38px]"
            >
              <path
                d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"
                className="h-full w-[150px]"
              ></path>
            </svg>
          </div>
        </div>

        {/* CodeBlock */}
        <div className="overflow-clip mb-20">
          <div className="relative min-h-[300px] min-w-[455px] p-1">
            <div className="absolute left-[5%] top-0 h-[310px] w-[90%] rounded-lg bg-gradient-to-r from-[#464954] to-[#202125]"></div>
            <div className="absolute left-[2.5%] top-5 w-[300px] lg:right-[20px] lg:top-[-20px]">
              <CodeBlock text="HTML" language="html" code={htmlCode} />
            </div>
            <div className="absolute right-[2.5%] top-20 w-[300px] lg:right-[30px] lg:top-[130px]">
              <CodeBlock text="SCSS" language="css" code={cssCode} />
            </div>
            <div className="z-4 absolute left-1/2 top-[150px] ml-[-250px] w-[300px] lg:right-[40px] lg:top-[280px]">
              <CodeBlock text="JS" language="javascript" code={jsCode} />
            </div>
          </div>
        </div>

        <div className="mx-8 flex flex-col items-center text-center  ">
          <div className="leading-5">
            <h1 className="p-1 text-center font-opensans text-3xl font-normal tracking-tight text-primary sm:text-5xl mb-2">
              The best place to build, test, and discover front-end code.
            </h1>
          </div>
          <p className=" text-primary-dark mb-8">
            CodePen is a{" "}
            <strong className=" text-primary">
              social development environment
            </strong>{" "}
            for front-end designers and developers. Build and deploy a website,
            show off your work, build test cases to learn and debug, and find
            inspiration.
            
          </p>
          <Button
              text={"Sign Up For Free"}
              className={
                "hover:green-bt-h h-10 w-[134px] bg-green-bt text-black"
              }
            />
        </div>



      </div>
    </div>
  );
}
