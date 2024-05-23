import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { RiMenuFold4Line } from "react-icons/ri";

import Button from "./Button";
import Header from "./Header";
import { RxCross2 } from "react-icons/rx";

export default function HeaderBar() {
  const [searchText, setSearchText] = useState("");
  const [navOpen, setNavOpen] = useState("true");

  return (
    <>
      <div className="item-center border-b-1 flex h-[74px] w-full justify-between overflow-hidden border-[#25283] bg-black p-4">
        <div className="flex items-center">
          <div className="mr-2 flex h-full items-center space-x-2 text-xl text-white md:hidden">
            <FiCodepen className="inline-block text-2xl " />
            <div className="flex h-full -rotate-90 items-center  rounded-md bg-[#5A5F73] px-2 py-1">
              <RiMenuFold4Line className="inline-block" />
            </div>
          </div>
          <div className="flex h-full w-full items-center rounded-md bg-[#252830]  p-4 sm:max-w-[300px]">
            <div className="flex w-full items-center font-bold text-primary-dark">
              <FiSearch className="mr-1 inline-block text-xl " />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Search CodePen... "
                className="w-full bg-transparent focus:text-white focus:outline-none "
              />
              {searchText ? (
                <RxCross2
                  className="text-2xl"
                  onClick={(e) => setSearchText("")}
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="ml-2 flex space-x-2">
          <Button {...{ text: "Sign Up", className: "bg-green-bt" }} />
          <Button
            {...{ text: "Sign Up", className: "bg-[#252830] text-white" }}
          />
        </div>
      </div>

      <div className="absolute left-0 top-[74px] w-full max-w-[234px] shadow-2xl md:hidden">
        <Header />
      </div>
    </>
  );
}
