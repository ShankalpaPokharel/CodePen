import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import { apiUrl } from "../constant/variables";
import axios from "axios";

import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

export default function UserProfile() {
    console.log("hello from uer profile")
    const [projects, setProjects] = useState(null)
    const user = useSelector((state) => state.user.value);
//   const dispatch = useDispatch();
  const navigate = useNavigate();
    const fatchData = () =>{
        axios.get(`${apiUrl}/api/user/getPinProjects`,{withCredentials:true})
        .then(response=>{
            console.log("fatech data userprofile")
          console.log(response.data.pinProjects)
          setProjects(response.data?.pinProjects)
        })
        .catch(error=>{
          console.log("fatch data your work error",error)
        })
      }
    
      useEffect(() => {
        async function fetchData() {
        //   if (!user) {
        //     navigate("/");
        //     return;
        //   }
          fatchData()
          
        }
    
        fetchData();
      }, [user, navigate]);
    
      const generateWeb = (code) => {
        return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <style>
              html, body {
                margin: 0;
                padding: 0;
                height: 100%;
                overflow: hidden;
              }
              ${code.css}
            </style>
          </head>
          <body>
            ${code.html}
            <script>${code.js}</script>
          </body>
          </html>
        `;
      };
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#131417]">
      <div className="relative">
        <header className="relative h-24 w-full bg-[url('https://cpwebassets.codepen.io/assets/packs/profile-bg-optimized-a5ca8f46aca292507f629c62b09630ad.svg')] bg-cover bg-no-repeat sm:h-[260px] sm:pb-[75px] sm:pl-[10px] sm:pr-[10px] sm:pt-[110px]">
          <div className="mx-auto pb-6 pl-[100px] pt-4 text-white sm:flex sm:flex-col sm:justify-center sm:pl-0 sm:text-center">
            <h1 className=" sm:4xl text-3xl font-extrabold">
              {user?.name}
            </h1>
            <p className="text-primary-dark">@{user?.username}</p>
          </div>
        </header>
        <div className="flex items-center justify-center sm:justify-end bg-black px-[10px] py-5 sm:relative">
          <div className="mr-2 flex text-white">
            <p>0 Followers</p>
            <p>0 Following</p>
          </div>
          <img
            className=" sm:b-0 absolute left-2 top-3 h-[70px] w-[70px] sm:bottom-0 sm:left-1/2 sm:top-auto sm:h-[124px] sm:w-[124px] sm:translate-x-[-50%]"
            src="https://assets.codepen.io/t-1/user-default-avatar.jpg?fit=crop&format=auto&height=512&version=0&width=512"
            alt=""
          />
        </div>

    

        {/* c  */}
        <div className=" w-full h-full">
            <div className="container text-white mb-12 mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {projects?.map((el) => (
                <div
                  className="cursor-pointer rounded-md bg-[#1E1F26]  "
                  key={el._id}
                  onClick={(e) =>
                    navigate(`/${el.createdBy.username}/pen/${el._id}`)
                  }
                >
                  <div className="h-[70%] p-3">
                    {/* <img className="h-full object-cover w-full rounded-md" src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
                    <iframe
                      title="Result"
                      srcDoc={generateWeb(el.code)}
                      sandbox="allow-scripts"
                      className="h-full w-full overflow-hidden"
                      style={{ overflow: "hidden" }}
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <p className=" font-bold">
                        {el.name == "Untitled"
                          ? `A Pen by ${el.createdBy.username}`
                          : el.name}{" "}
                      </p>
                      <BsThreeDots className="inline-block text-2xl text-primary-dark" />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <div className="flex w-fit items-center justify-center rounded bg-[#717790] px-2 py-1 text-xs">
                        <FaHeart className="mr-1" />0
                      </div>
                      <div className="flex w-fit items-center justify-center rounded bg-[#717790] px-2 py-1 text-xs">
                        <BiSolidMessage className="mr-1" />0
                      </div>
                      <div className="flex w-fit items-center justify-center rounded bg-[#717790] px-2 py-1 text-xs">
                        <IoEye className="mr-1" />0
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        {/* c  */}
      </div>
      <Footer />
    </div>
  );
}
