import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { RiMenuFold4Line } from "react-icons/ri";

import Button from "./Button";
import Header from "./Header";
import { RxCross2 } from "react-icons/rx";

export default function HeaderBar() {
  const [searchText, setSearchText] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  // console.log(location.pathname)

  return (
    <>
      <div className="item-center border-b-1 flex h-[74px] w-full justify-between overflow-hidden border-[#25283] bg-black p-4">
        <div className="flex items-center">
          <div className="mr-2 flex h-full items-center space-x-2 text-xl text-white md:hidden">
            <Link to={""}>
              <FiCodepen className="inline-block text-2xl " />
            </Link>
            <div className="flex h-full -rotate-90 items-center  rounded-md bg-[#5A5F73] px-2 py-1" onClick={e=>setNavOpen(!navOpen)}>
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
         <Link to={"/signup"} className={`${location.pathname=="/signup" && "hidden"}`}><Button {...{ text: "Sign Up", className: "bg-green-bt" }} /></Link>
          <Link to={"/login"} className={`${location.pathname=="/login" && "hidden"}`}>
            <Button
              {...{ text: "Log in", className: "bg-[#252830] text-white" }}
            />
          </Link>
        </div>
      </div>

      {navOpen? <div className="absolute left-0 top-[74px] w-full max-w-[234px] shadow-2xl md:hidden z-10">
        <Header />
      </div>:null}
      
    </>
  );
}
