import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PiLayoutBold } from "react-icons/pi";
import { RiArrowDownWideLine } from "react-icons/ri";
import { PiGridFourFill } from "react-icons/pi";

export default function Header({ className }) {
  const user = useSelector((state) => state.user.value);
  return (
    <div
      className={`h-full bg-[#1E1F26] p-5 font-medium text-primary  md:sticky md:p-0 ${className} `}
    >
      <div className="overflow-hidden ">
        <Link
          className="hidden h-[74px] cursor-pointer items-center px-5 md:flex"
          to={""}
        >
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
        {!user && (
          <span className="mx-4 mb-2 flex justify-center text-center font-monos text-[11px] tracking-tighter text-primary-dark ">
            TRY OUR ONLINE EDITOR
          </span>
        )}

        <div
          className={`mx-4 mb-2  overflow-clip  bg-gradient-to-r  from-green-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% ${user ? "rounded-b-md pt-1" : "h-12 rounded-md p-1 md:h-14"} `}
        >
          {!user && (
            <Link to={"/pen"}>
              <Button
                {...{ text: "Start Coading", className: "bg-black h-full" }}
              />
            </Link>
          )}
          {user && (
            <div className=" divide-y divide-gray-500">
              <Link
                to={"/pen"}
                className="flex items-center justify-between bg-[#2C303A] px-2 py-3 text-lg hover:bg-[#09090B]"
              >
                <div className="flex items-center ">
                  <PiLayoutBold />
                  <span className="overflow-clip px-2">Pen</span>
                </div>
                <RiArrowDownWideLine />
              </Link>
              <div className="flex items-center bg-[#2C303A] px-2 py-3 text-lg hover:bg-[#09090B]">
                <PiGridFourFill />
                <span className="overflow-clip px-2">Collection</span>
              </div>
            </div>
          )}
        </div>

        {user && (
          <div className="mb-3">
            <div className="py-2 text-base hover:bg-[#09090B]">
              <span className="overflow-clip px-5">Your Work</span>
            </div>
            <div className="py-2 text-base hover:bg-[#09090B]">
              <span className="overflow-clip px-5">Activity</span>
            </div>
            <div className="px-5 py-2 text-base hover:bg-[#09090B]">
              <span className="overflow-clip">Assets</span>
            </div>
            <div className="px-5 py-2 text-base hover:bg-[#09090B]">
              <span className="overflow-clip">Pinned Items</span>
            </div>
          </div>
        )}

        <div className="py-2 text-base hover:bg-[#09090B]">
          <span className="overflow-clip px-5">Search Pens</span>
        </div>
        <div className="py-2 text-base hover:bg-[#09090B]">
          <span className="overflow-clip px-5">Challenges</span>
        </div>
        <div className="px-5 py-2 text-base hover:bg-[#09090B]">
          <span className="overflow-clip">Spark</span>
        </div>
      </div>
      <div className="mt-4 px-5 py-2 text-base hover:bg-[#09090B]">
        <span>CodePen</span>{" "}
        <span className="bg-yellow-400 p-1 text-xs font-bold text-black">
          PRO
        </span>
      </div>
    </div>
  );
}
