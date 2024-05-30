import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { RiMenuFold4Line } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

import { FaPencilAlt, FaSave, FaCloud } from "react-icons/fa";

import Button from "./common/Button";
import Header from "./common/Header";
import { RxCross2 } from "react-icons/rx";

export default function CodeEditorHeader() {
  const [searchText, setSearchText] = useState("");
  const [editProjectName, setEditProjectName] = useState(false);
  const [editable, setEditable] = useState(false);

  return (
    <>
      <div className="item-center border-b-1 flex h-[70px] w-full justify-between overflow-hidden border-[#25283] bg-black p-4">
        <div className="flex items-center">
          <div className="mr-2 flex h-full items-center space-x-2  py-4 text-white">
            <FiCodepen className="inline-block text-5xl " />
            <div className="flex flex-col ">
              <div className="flex items-center">
                <input
                  type="text"
                  value={editProjectName || "Untitled"}
                  onChange={(e) => setEditProjectName(e.target.value)}
                  className="bg-transparent text-white focus:outline-none "
                  readOnly={!editable}
                />
                <div
                  className="flex h-8 w-8 cursor-pointer items-center justify-center text-sm  hover:scale-110 "
                  onClick={(e) => setEditable(!editable)}
                >
                  {editable ? <FaSave /> : <FaPencilAlt />}
                </div>
              </div>
              <span className=" text-sm text-primary-dark">
                Captain Anonymous
              </span>
            </div>
          </div>
        </div>

        <div className="ml-2 flex space-x-2">
          <button className="flex items-center justify-center rounded-md bg-[#444857]  px-4 py-[10px] text-primary">
            <div className="flex items-center justify-center gap-1">
              <FaCloud className="inline-block" />
              <span>Save</span>
            </div>
          </button>
          <button className="flex items-center justify-center rounded-md bg-[#444857]  px-4 py-[10px] text-primary">
            <div className="flex items-center justify-center gap-1">
              <IoMdSettings className="inline-block" />
              <span>Save</span>
            </div>
          </button>
          <button className="flex items-center justify-center rounded-md bg-[#444857]  px-4 py-[10px] text-primary">
            <div className="flex items-center justify-center gap-1">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002Zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003Zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003Zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003Z"></path></svg>
              
            </div>
          </button>

          <Button {...{ text: "Sign Up", className: "bg-green-bt " }} />
          <Button
            {...{ text: "Login", className: "bg-[#252830] text-white" }}
          />
        </div>
      </div>
    </>
  );
}
