import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slice/userSlice";

import { FiSearch } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { RiMenuFold4Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import Button from "./Button";
import Header from "./Header";
import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";

export default function HeaderBar() {
  const [searchText, setSearchText] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const location = useLocation();
  
  // console.log(location.pathname)

  return (
    <>
      <div className="item-center border-b-1 flex h-[74px] w-full justify-between overflow-hidden border-[#25283] bg-black p-4">
        
        {user && 
        <div className="text-white text-xs lg:text-base font-opensans hidden md:flex rounded-sm overflow-hidden gap-[1px]">
          <Link to="/your-work"  className="px-[22px] py-2 bg-[#444857] border-b-2   border-green-600 ">Your Work</Link>
          <button className="px-[22px] py-2 bg-[#252830] border-b-2 border-[#252830] hover:border-gray-400 ">Following</button>
          <button className="px-[22px] py-2 bg-[#252830] border-b-2 border-[#252830] hover:border-gray-400  ">Trending</button>
        </div>}
        
        <div className="flex items-center">
          <div className="mr-2 flex h-full items-center space-x-2 text-xl text-white md:hidden">
            <Link to={""}>
              <FiCodepen className="inline-block text-2xl " />
            </Link>
            <div
              className="flex h-full -rotate-90 items-center  rounded-md bg-[#5A5F73] px-2 py-1"
              onClick={(e) => setNavOpen(!navOpen)}
            >
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

        

        {user ? (
          <div className="flex space-x-2">
            <button className="text flex items-center justify-center rounded-md  bg-[#444857] px-4 py-[10px] text-primary">
            <div className="flex items-center justify-center gap-1">
              <svg viewBox="0 0 12 18" className="h-4 w-4 fill-white">
                <path d="M1.5 7.74V1.8c-.414 0-.75-.403-.75-.9s.336-.9.75-.9h9c.414 0 .75.403.75.9s-.336.9-.75.9v5.94a7.567 7.567 0 0 1 1.274 2.55c.11.395.166.73.195.973a4.701 4.701 0 0 1 .03.387v.031l.001.01v.007s-.004-.117 0 .002c0 .497-.336.9-.75.9h-4.5v4.5c0 .497-.336.9-.75.9s-.75-.403-.75-.9v-4.5H.75c-.414 0-.75-.403-.75-.9v-.019a2.22 2.22 0 0 1 .005-.122c.004-.074.011-.173.026-.296.029-.244.085-.578.195-.973.2-.72.575-1.632 1.274-2.55Z"></path>
              </svg>
            </div>
                    </button>
            <div onClick={e=>setOpenProfileMenu(!openProfileMenu)} className=" cursor-pointer h-[42px]">
              <img className="h-full rounded-md" src={user.photoUrl} alt="" />
            </div>
          </div>
        ) : 
        <div className="ml-2 flex space-x-2">
        <Link
          to={"/signup"}
          className={`${location.pathname == "/signup" && "hidden"}`}
        >
          <Button {...{ text: "Sign Up", className: "bg-green-bt" }} />
        </Link>
        <Link
          to={"/login"}
          className={`${location.pathname == "/login" && "hidden"}`}
        >
          <Button
            {...{ text: "Log in", className: "bg-[#252830] text-white" }}
          />
        </Link>
      </div>}



        
      </div>

      {navOpen ? (
        <div className="absolute left-0 top-[70px] z-10 w-full max-w-[234px] shadow-2xl md:hidden">
          <Header />
        </div>
      ) : null}

{user && openProfileMenu ?
 <div className="divide-y divide-gray-500 absolute top-[70px] right-2 mr-2 rounded text-white bg-[#1e1f26] z-10 shadow-2xl max-w-[156px] w-full text-xs font-bold">
  <div className="p-2">
    <p className="mb-2">Your Work</p>
    <Link to={`${user.username}`}>Profile</Link>
  </div>
 
  <div className="p-2">
    <p className="mb-2">New Pen</p>
    <p>New Collection</p>
  </div>
 
  <div className="p-2">
    <p className="mb-2">Asset Manager</p>
    <p className="mb-2">Embed Theme Builder</p>
    <p>Upgrade to Pro</p>
  </div>
  <div className="p-2">
    <p className="mb-2">Documenatation</p>
    <p>Support</p>
  </div>
 
  <div className="p-2">
    <p className="mb-2 flex items-center"><IoMdSettings className="inline-block mr-1"/>Settings</p>
    <p onClick={() => dispatch(logout())} className="flex cursor-pointer items-center"><MdLogout className="inline-block mr-1"/>Logout</p>
  </div>
 </div> 
 
 : null}


    </>
  );
}
