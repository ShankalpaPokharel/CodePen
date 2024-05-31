import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header({ className }) {
  return (
    <div
      className={`bg-[#1E1F26] p-5 font-medium text-primary h-full  md:sticky md:p-0 ${className} `}
    >
      <div className="overflow-hidden ">
        <Link className="hidden h-[74px] items-center px-5 md:flex cursor-pointer" to={""} >
          <svg
            viewBox="0 0 138 26"
            fill="none"
            stroke="#fff"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-[74px]"
          >
            <path
              d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"
              className="h-full w-[150px]"
            ></path>
          </svg>
        </Link>
        <span className="mx-4 mb-2 flex justify-center text-center font-monos text-[11px] tracking-tighter text-primary-dark ">
          TRY OUR ONLINE EDITOR
        </span>
        <Link to={"/pen"}>
          <div className="mx-4 mb-2 h-12 overflow-clip rounded-md bg-gradient-to-r  from-green-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% p-1 md:h-14">
            <Button
              {...{ text: "Start Coading", className: "bg-black h-full" }}
            />
          </div>
        </Link>
        <div className="py-3 text-lg hover:bg-[#09090B]">
          <span className="overflow-clip px-5">Search Pens</span>
        </div>
        <div className="py-3 text-lg hover:bg-[#09090B]">
          <span className="overflow-clip px-5">Challenges</span>
        </div>
        <div className="px-5 py-3 text-lg hover:bg-[#09090B]">
          <span className="overflow-clip">Spark</span>
        </div>
      </div>
      <div className="mt-4 px-5 py-3 text-lg hover:bg-[#09090B]">
        <span>CodePen</span>{" "}
        <span className="bg-yellow-400 text-xs font-bold text-black p-1">PRO</span>
      </div>
    </div>
  );
}
