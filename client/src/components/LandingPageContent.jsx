import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CodeBlock from "./CodeBlock";
import Button from "./common/Button";

import { FaHeart, FaEye } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import ImageSlider from "./ImageSlider";
import Footer from "./common/Footer";

export default function LandingPageContent() {

  const user = useSelector((state) => state.user.value);
  const navigate= useNavigate()

  useEffect(() => {
   if (user) navigate("/your-work")
  }, [])
  


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
                <Link to={"/signup"}>
                  <Button
                    text={"Sign Up For Free"}
                    className={
                      "hover:green-bt-h h-10 w-[134px] bg-green-bt text-black"
                    }
                  />
                </Link>
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
      <section className="relative border-none py-12">
        <div className="container relative mx-auto px-8 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* item  */}
          <div className="my-8 rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="mb-[10px] text-xl font-normal">Build & Test</h2>
            <p className="pb-4">
              Get work done quicker by building out{" "}
              <strong>entire projects</strong> or isolating code to{" "}
              <strong>test features and animations</strong>. Want to keep it all
              under wraps?{" "}
              <a href="/features/pro">
                <strong className="font-bold text-[#76daff]">
                  Upgrade to a{" "}
                  <span className="rounded-md bg-yellow-400 p-1 text-black">
                    PRO
                  </span>{" "}
                  account{" "}
                </strong>
              </a>
              to keep your work private.
            </p>

            <Link to={"/pen"}>
              <Button
                text="Try the Editor"
                className="w-fit bg-[#444857] text-primary"
              ></Button>
            </Link>
          </div>
          {/* item  */}
          <div className="my-8 rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="mb-[10px] text-xl font-normal">Build & Test</h2>
            <p className="pb-4">
              Want to upgrade your skills and get noticed? Participating in
              CodePen Challenges is a great way to try something new. We
              frequently feature these Pens on our homepage and across social
              media!
            </p>

            <Button
              text="Join this Week's Challenge"
              className="w-fit bg-[#444857] text-primary"
            ></Button>
          </div>

          {/* item  */}
          <div className="my-8 rounded-xl bg-[#2C303A] px-6 pb-8 pt-6 text-primary">
            <div className="relative mb-4 mt-[-40px] h-[75px] w-[75px] rounded-xl bg-[#171613] pt-3">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
                alt="Icon of conveyer belt with boxes on it."
                className="mx-[10px]  h-auto max-w-full "
              />
            </div>
            <h2 className="mb-[10px] text-xl font-normal">Build & Test</h2>

            <p className="pb-4">
              {" "}
              Become a part of the
              <strong className="font-bold">
                most active front-end community
              </strong>{" "}
              in the world by sharing work. Presenting at a conference? Show
              your code directly in the browser with{" "}
              <a href="">
                <strong className="font-bold text-[#76daff]">
                  Presentation Mode
                </strong>
              </a>
              .
            </p>

            <Button
              text="Explore Trending"
              className="w-fit bg-[#444857] text-primary"
            ></Button>
          </div>

          {/* image  */}
          <img
            src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg"
            alt=""
            className=" absolute bottom-[-36px] left-[-25%] h-auto w-[400px] max-w-full overflow-clip lg:left-[-10%]"
          />
        </div>
      </section>

      {/* inspirational deisgn  */}
      <div>
        <section className="pt-12 ">
          <div className="grid-cols-auto-fill-minmax container grid items-start gap-12">
            <div className=" flex min-h-full w-full  flex-col ">
              <h2 className="mb-[10px] text-2xl font-normal text-primary">
                Find inspiration from 1.8 million+ front-end designers and
                developers.
              </h2>
              <p className=" mb-4 text-primary-dark">
                Browse and share work from world-class designers and developers
                in the front-end community.
              </p>
            </div>

            <article className="group relative grid rounded-xl p-2 hover:bg-[#1e1f26]  ">
              <div className=" relative grid items-stretch overflow-hidden rounded-md opacity-[0.99]">
                <div className=" relative h-full rounded-md bg-[#444857] bg-cover pt-[56.25%]"></div>
                <img
                  src="https://shots.codepen.io/username/pen/KKEgQeG-1280.jpg?version=1704988946"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  alt=" SVG Filter — Cross Blur"
                  loading="lazy"
                ></img>
              </div>
              <div className="rounded-xl bg-[#1e1f26] p-3">
                <header className="flex">
                  <a href="#" className="relative mr-3">
                    <img
                      src="https://assets.codepen.io/1138011/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1517401093&amp;width=80"
                      alt="Profile image for Andrii Rodzyk"
                      className=" overflow-hidden rounded"
                      width="40"
                      height="40"
                    />
                  </a>

                  <div className="mr-1 w-[95%] overflow-hidden">
                    <h2 className="mb-1 text-base font-bold text-primary">
                      SVG Filter-Cross Blur
                    </h2>
                    <address className=" text-sm">
                      <p className=" text-primary-dark">Andrii Rodzyk</p>
                    </address>
                  </div>
                </header>
                <footer className="invisible mt-2 flex items-center text-xs text-primary group-hover:visible">
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaHeart className="mr-[2px]" />
                    <span>19</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaMessage className="mr-[2px]" />
                    <span>0</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaEye className="mr-[2px]" />
                    <span>19</span>
                  </button>
                </footer>
              </div>
            </article>
            <article className="group relative grid rounded-xl p-2 hover:bg-[#1e1f26]  ">
              <div className=" relative grid items-stretch overflow-hidden rounded-md opacity-[0.99]">
                <div className=" relative h-full rounded-md bg-[#444857] bg-cover pt-[56.25%]"></div>
                <img
                  src="https://shots.codepen.io/username/pen/LYoRWLe-320.jpg?version=1716644617"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  alt=" SVG Filter — Cross Blur"
                  loading="lazy"
                ></img>
              </div>
              <div className="rounded-xl bg-[#1e1f26] p-3">
                <header className="flex">
                  <a href="#" className="relative mr-3">
                    <img
                      src="https://assets.codepen.io/1138011/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1517401093&amp;width=80"
                      alt="Profile image for Andrii Rodzyk"
                      className=" overflow-hidden rounded"
                      width="40"
                      height="40"
                    />
                  </a>

                  <div className="mr-1 w-[95%] overflow-hidden">
                    <h2 className="mb-1 text-base font-bold text-primary">
                      SVG Filter-Cross Blur
                    </h2>
                    <address className=" text-sm">
                      <p className=" text-primary-dark">Andrii Rodzyk</p>
                    </address>
                  </div>
                </header>
                <footer className="invisible mt-2 flex items-center text-xs text-primary group-hover:visible">
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaHeart className="mr-[2px]" />
                    <span>19</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaMessage className="mr-[2px]" />
                    <span>0</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaEye className="mr-[2px]" />
                    <span>19</span>
                  </button>
                </footer>
              </div>
            </article>
            <article className="group relative grid rounded-xl p-2 hover:bg-[#1e1f26]  ">
              <div className=" relative grid items-stretch overflow-hidden rounded-md opacity-[0.99]">
                <div className=" relative h-full rounded-md bg-[#444857] bg-cover pt-[56.25%]"></div>
                <img
                  src="https://shots.codepen.io/username/pen/KKEgQeG-1280.jpg?version=1704988946"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  alt=" SVG Filter — Cross Blur"
                  loading="lazy"
                ></img>
              </div>
              <div className="rounded-xl bg-[#1e1f26] p-3">
                <header className="flex">
                  <a href="#" className="relative mr-3">
                    <img
                      src="https://assets.codepen.io/1138011/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1517401093&amp;width=80"
                      alt="Profile image for Andrii Rodzyk"
                      className=" overflow-hidden rounded"
                      width="40"
                      height="40"
                    />
                  </a>

                  <div className="mr-1 w-[95%] overflow-hidden">
                    <h2 className="mb-1 text-base font-bold text-primary">
                      SVG Filter-Cross Blur
                    </h2>
                    <address className=" text-sm">
                      <p className=" text-primary-dark">Andrii Rodzyk</p>
                    </address>
                  </div>
                </header>
                <footer className="invisible mt-2 flex items-center text-xs text-primary group-hover:visible">
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaHeart className="mr-[2px]" />
                    <span>19</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaMessage className="mr-[2px]" />
                    <span>0</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaEye className="mr-[2px]" />
                    <span>19</span>
                  </button>
                </footer>
              </div>
            </article>
            <article className="group relative grid rounded-xl p-2 hover:bg-[#1e1f26]  ">
              <div className=" relative grid items-stretch overflow-hidden rounded-md opacity-[0.99]">
                <div className=" relative h-full rounded-md bg-[#444857] bg-cover pt-[56.25%]"></div>
                <img
                  src="https://shots.codepen.io/username/pen/ZENpKax-320.jpg?version=1716618343"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  alt=" SVG Filter — Cross Blur"
                  loading="lazy"
                ></img>
              </div>
              <div className="rounded-xl bg-[#1e1f26] p-3">
                <header className="flex">
                  <a href="#" className="relative mr-3">
                    <img
                      src="https://assets.codepen.io/1138011/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1517401093&amp;width=80"
                      alt="Profile image for Andrii Rodzyk"
                      className=" overflow-hidden rounded"
                      width="40"
                      height="40"
                    />
                  </a>

                  <div className="mr-1 w-[95%] overflow-hidden">
                    <h2 className="mb-1 text-base font-bold text-primary">
                      SVG Filter-Cross Blur
                    </h2>
                    <address className=" text-sm">
                      <p className=" text-primary-dark">Andrii Rodzyk</p>
                    </address>
                  </div>
                </header>
                <footer className="invisible mt-2 flex items-center text-xs text-primary group-hover:visible">
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaHeart className="mr-[2px]" />
                    <span>19</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaMessage className="mr-[2px]" />
                    <span>0</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaEye className="mr-[2px]" />
                    <span>19</span>
                  </button>
                </footer>
              </div>
            </article>
            <article className="group relative grid rounded-xl p-2 hover:bg-[#1e1f26]  ">
              <div className=" relative grid items-stretch overflow-hidden rounded-md opacity-[0.99]">
                <div className=" relative h-full rounded-md bg-[#444857] bg-cover pt-[56.25%]"></div>
                <img
                  src="https://shots.codepen.io/username/pen/KKEgQeG-1280.jpg?version=1704988946"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  alt=" SVG Filter — Cross Blur"
                  loading="lazy"
                ></img>
              </div>
              <div className="rounded-xl bg-[#1e1f26] p-3">
                <header className="flex">
                  <a href="#" className="relative mr-3">
                    <img
                      src="https://assets.codepen.io/1138011/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=80&amp;version=1517401093&amp;width=80"
                      alt="Profile image for Andrii Rodzyk"
                      className=" overflow-hidden rounded"
                      width="40"
                      height="40"
                    />
                  </a>

                  <div className="mr-1 w-[95%] overflow-hidden">
                    <h2 className="mb-1 text-base font-bold text-primary">
                      SVG Filter-Cross Blur
                    </h2>
                    <address className=" text-sm">
                      <p className=" text-primary-dark">Andrii Rodzyk</p>
                    </address>
                  </div>
                </header>
                <footer className="invisible mt-2 flex items-center text-xs text-primary group-hover:visible">
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaHeart className="mr-[2px]" />
                    <span>19</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaMessage className="mr-[2px]" />
                    <span>0</span>
                  </button>
                  <button className="pointer mr-1 inline-flex w-fit items-center justify-center rounded bg-[#5a5f73] px-2 py-1 text-center">
                    <FaEye className="mr-[2px]" />
                    <span>19</span>
                  </button>
                </footer>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Feature Presentation */}
      <section className="relative bg-[#18191e] pt-12 text-primary ">
        <div className="mb-12 text-center">
          <h2 className=" mb-[10px] font-opensans text-3xl font-normal">
            A front-end environment made for testing and sharing
          </h2>
          <p className="text-[#76daff]">Explore the Editor</p>
        </div>

        <div className="container  px-8">
          <ImageSlider />
        </div>
      </section>

      {/* Get Started Quicker  */}
      <section className="bg relative   bg-[#131417] py-20">
        <div className="container relative px-[10px]">
          <div className="relative z-20 grid grid-cols-3 gap-4 px-[10px] xl:grid-cols-6">
            <div className="col-start-3 col-end-4 row-start-1 row-end-2 flex flex-col xl:col-start-6 xl:col-end-6">
              <h2 className=" mb-2 font-opensans text-2xl font-normal text-primary">
                Get Started Quicker
              </h2>
              <p className="mb-4 text-xs text-primary-dark">
                Get inspiration from Pens using frameworks, libraries, and
                design patterns. Then, start your own with{" "}
                <strong>premade templates</strong>.
              </p>
              <p className="text-sm text-[#76daff]">Explore Topics</p>
            </div>
            {/* react item  */}
            <div className="scale-95 cursor-pointer rounded-md bg-[#2c303a] shadow-lg hover:scale-100 hover:transform hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="p-12 text-center">
                <svg
                  className="m-auto h-auto w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="120 0 600 595.3"
                >
                  <g fill="#61DAFB">
                    <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"></path>
                    <circle cx="420.9" cy="296.5" r="45.7"></circle>
                    <path d="M520.5 78.1z"></path>
                  </g>
                </svg>
                <h3 className=" absolute bottom-6 left-0 w-full text-center text-2xl font-semibold text-[#76daff]">
                  React
                </h3>
              </div>
            </div>
            {/*vue item  */}
            <div className="scale-95 cursor-pointer rounded-md bg-[#2c303a] shadow-lg hover:scale-100 hover:transform hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="p-12 text-center">
                <svg
                  className="m-auto h-auto w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -10 196.32 190.02"
                >
                  <path
                    fill="#42b883"
                    d="M120.83 0 98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"
                  ></path>
                  <path
                    fill="#35495e"
                    d="M120.83 0 98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"
                  ></path>
                </svg>
                <h3 className=" absolute bottom-6 left-0 w-full text-center text-2xl font-semibold text-[#76daff]">
                  Vue
                </h3>
              </div>
            </div>
            {/* talwind item  */}
            <div className="scale-95 cursor-pointer rounded-md bg-[#2c303a] shadow-lg hover:scale-100 hover:transform hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="flex justify-center p-12 text-center">
                <svg
                  className="m-auto  block h-20 w-20 sm:h-24 sm:w-24 "
                  width="512"
                  height="384"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="0%" y1="0%" y2="100%" id="a">
                      <stop stopColor="#2383AE" offset="0%"></stop>
                      <stop stopColor="#6DD7B9" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 8c1.333-5.333 4.667-8 10-8 8 0 9 6 13 7 2.667.667 5-.333 7-3-1.333 5.333-4.667 8-10 8-8 0-9-6-13-7-2.667-.667-5 .333-7 3zM0 20c1.333-5.333 4.667-8 10-8 8 0 9 6 13 7 2.667.667 5-.333 7-3-1.333 5.333-4.667 8-10 8-8 0-9-6-13-7-2.667-.667-5 .333-7 3z"
                    transform="translate(4 12)"
                    fill="url(#a)"
                  ></path>
                </svg>
                <h3 className=" absolute bottom-6 left-0 w-full text-center text-2xl font-semibold text-[#76daff]">
                  Tailwind
                </h3>
              </div>
            </div>
            {/* Sass item  */}
            <div className="scale-95 cursor-pointer rounded-md bg-[#2c303a] shadow-lg hover:scale-100 hover:transform hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="p-12 text-center">
                <svg
                  className="m-auto h-auto w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="384"
                  viewBox="0 0 512 384"
                >
                  <path
                    fill="#CF649A"
                    d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1C4 117.9-2.2 149.7.4 162.9c9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zM362 290c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"
                  ></path>
                </svg>
                <h3 className=" absolute bottom-6 left-0 w-full text-center text-2xl font-semibold text-[#76daff]">
                  Sass
                </h3>
              </div>
            </div>
            {/* Gsap item  */}
            <div className="scale-95 cursor-pointer rounded-md bg-[#2c303a] shadow-lg hover:scale-100 hover:transform hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="p-12 text-center">
                <img
                  className="m-auto h-auto w-full"
                  src="https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png"
                  alt=""
                />
                <h3 className=" absolute bottom-6 left-0 w-full text-center text-2xl font-semibold text-[#76daff]">
                  GSAP
                </h3>
              </div>
            </div>
          </div>
          <img
            src="https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg"
            alt=""
            className="absolute bottom-[-70px] left-[-100px] w-[900px] "
          />
        </div>
      </section>

      {/* Bring the whole team */}
      <section className="bg relative bg-[#131417] py-12">
        <div className="container relative ">
          {/* content  */}
          <div className="relative z-[1]  rounded-md bg-[#1e1f26] p-12">
            <div className="mx-auto mb-12 mt-0 flex w-full max-w-[560px] flex-col items-center text-center ">
              <h2 className=" mb-[10px] text-2xl font-bold text-primary">
                Bring the Whole Team
              </h2>
              <p className="mb-4 text-primary-dark">
                Each team and team member gets all the features of a PRO
                membership. That means the Team can do things like upload
                Assets, use features like Collab Mode, Professor Mode,
                Presentation Mode, and Live View, and apply custom CSS to Posts,
                Profiles, and Embeds.
              </p>

              <Button
                className=" bg-green-bt px-4 text-black hover:bg-green-bt-h"
                text="Start a Team"
              />
            </div>
            <h3 className=" bold mb-[10px] text-center font-opensans text-xl text-primary">
              Loved by hundreds of teams, including:
            </h3>

            <div className="flex flex-wrap items-center justify-center">
              <img
                src="https://cpwebassets.codepen.io/assets/packs/airbnb-cb44d3434e60956b120c2cfd2afa9a23.png"
                alt="Airbnb"
                className="w-[68px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/grubhub-f05150a98afe6175f221f4bc75ac3372.png"
                alt="Grubhub"
                className="w-[149px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/square-e4a6fa8c30a53180c593a11aeb1618c2.png"
                alt="Square"
                className="w-[71px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/netflix-8b4f0b76ad5ccaa1b6326267be6c396f.png"
                alt="Netflix"
                className="w-[125px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/adobe-0d9fee1af16f2db73270e52fbdcf4fe8.png"
                alt="Adobe"
                className="w-[72px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/salesforce-63204abcda6bd196c6a6da3bb4911510.png"
                alt="Salesforce"
                className="w-[137px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/microsoft-0859118499110df3a66f00a999a53a40.png"
                alt="Microsoft"
                className="w-[209px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/lyft-87acc577a28f7c5fbafbed09b543dd91.png"
                alt="Lyft"
                className="w-[70px] p-4"
              />
              <img
                src="https://cpwebassets.codepen.io/assets/packs/ibm-c6d225a3817a57e66f67fdcb18d1fe04.png"
                alt="IBM"
                className="w-[121px] p-4"
              />
            </div>
          </div>

          {/* img  */}
          <img
            src="https://cpwebassets.codepen.io/assets/packs/lines-1-6ac7ba4c47562c61c5018028fd2b7a0e.svg"
            alt=""
            className="absolute bottom-[-50px] right-[-10%] w-[400px]"
          />
        </div>
      </section>

      <section>
      <Footer/>
      </section>


    </div>
  );
}

// className="m-auto h-auto w-full"
