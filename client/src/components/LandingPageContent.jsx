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
    <div className=" bg-[#131417]">
      <div className=" h-full">
        <div className="container w-full overflow-clip xl:overflow-visible">
          {/* codepen logo */}
          <div className="flex items-center justify-center  lg:hidden">
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
          <div className="relative w-full py-8">
            <div className="relative w-full overflow-clip lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible ">
              {/* CodeBlock */}
              <div className="z-[2] mb-20 overflow-clip lg:order-2   lg:overflow-visible">
                <div className="relative z-[2] h-full min-h-[310px] min-w-[455px] p-1">
                  <div className="absolute left-[5%] top-0 mb-2 h-[310px] w-[90%] rounded-xl bg-gradient-to-r from-[#464954] to-[#202125] lg:h-[410px]"></div>
                  <div className="absolute left-[2.5%] top-5  w-[300px] lg:left-auto lg:right-[20px] lg:top-[-20px]">
                    <CodeBlock text="HTML" language="html" code={htmlCode} />
                  </div>
                  <div className="absolute right-[2.5%] top-20 w-[300px] lg:right-[-30px] lg:top-[130px]">
                    <CodeBlock text="SCSS" language="css" code={cssCode} />
                  </div>
                  <div className="absolute left-[7.5%] top-[150px] z-[4] ml-0 w-[300px] sm:left-1/2 sm:ml-[-250px] lg:left-auto lg:right-5 lg:top-[280px] lg:ml-auto ">
                    <CodeBlock text="JS" language="javascript" code={jsCode} />
                  </div>
                </div>
              </div>
              {/* Hero text  */}
              <div className="relative z-[2] mx-8 flex flex-col items-center text-center lg:order-1 lg:mx-1  lg:items-start lg:py-12 lg:text-left">
                <div className="leading-5 lg:flex">
                  <div className="mr-2 hidden pt-4 lg:block">
                    <svg
                      viewBox="0 0 100 100"
                      stroke="#fff"
                      fill="#fff"
                      aria-hidden="true"
                      className="w-12"
                    >
                      <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                    </svg>
                  </div>
                  <h1 className="mb-2 text-wrap p-1 text-center font-opensans  text-3xl leading-tight text-primary sm:text-[2.75rem] lg:text-left lg:font-normal lg:tracking-tight">
                    The best place to build, test, and discover front-end code.
                  </h1>
                </div>
                <p className=" mb-8 text-primary-dark">
                  CodePen is a{" "}
                  <strong className=" text-primary">
                    social development environment
                  </strong>{" "}
                  for front-end designers and developers. Build and deploy a
                  website, show off your work, build test cases to learn and
                  debug, and find inspiration.
                </p>
                <Button
                  text={"Sign Up For Free"}
                  className={
                    "hover:green-bt-h h-10 w-[134px] bg-green-bt text-black"
                  }
                />
              </div>
              <img
                src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"
                alt=""
                className="absolute  right-[-125px] top-[290px]  w-[545px] lg:bottom-[-410px] lg:right-[-90px]  lg:top-auto lg:w-[600px] xl:bottom-[-480px] "
              />
            </div>
          </div>
        </div>
      </div>

      {/* another section  */}
      <section className="relative py-12 border-none">
        <div className="container mx-auto px-8 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-8">

          {/* item  */}
          <div className="rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 my-8 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="text-xl mb-[10px] font-normal">Build & Test</h2>
            <p className="pb-4">Get work done quicker by building out <strong>entire projects</strong> or isolating code to <strong>test features and animations</strong>. Want to keep it all under wraps? <a href="/features/pro"><strong className="text-[#76daff] font-bold">Upgrade to a <span className="text-black p-1 bg-yellow-400 rounded-md">PRO</span> account </strong></a>to keep your work private.</p>

            <Button text="Try the Editor" className="text-primary bg-[#444857] w-fit"></Button>
          </div>
          {/* item  */}
          <div className="rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 my-8 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="text-xl mb-[10px] font-normal">Build & Test</h2>
            <p className="pb-4">Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!</p>

            <Button text="Join this Week's Challenge" className="text-primary bg-[#444857] w-fit"></Button>
          </div>
         
          {/* item  */}
          <div className="rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 my-8 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="text-xl mb-[10px] font-normal">Build & Test</h2>
            
            <p className="pb-4"> Become a part of the<strong className="font-bold">most active front-end community</strong> in the world by sharing work. Presenting at a conference? Show your code directly in the browser with <a href=""><strong className="text-[#76daff] font-bold">Presentation Mode</strong></a>.</p>
 
            <Button text="Explore Trending" className="text-primary bg-[#444857] w-fit"></Button>
          </div>
         
         {/* image  */}
         <img src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" className=" bottom-[-36px] absolute left-[-25%] w-[400px] h-auto max-w-full overflow-clip lg:left-[-10%]"/>




        </div>
      </section>
    </div>
  );
}
