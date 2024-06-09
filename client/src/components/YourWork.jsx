import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import axios from "axios";
import { apiUrl } from "../constant/variables";
import Footer from "./common/Footer";

import { BsFillGrid3X2GapFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

export default function YourWork() {
  const [projects, setProjects] = useState(null)
  const [searchText, setSearchText] = useState("")
  // const [filterprojects,setFilterprojects] = useState("")
  const user = useSelector((state) => state.user.value);
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterprojects = projects?.filter(el=>el.name.toLowerCase().includes(searchText.trim().toLowerCase()))
 
  

  const fatchData = () =>{
    axios.get(`${apiUrl}/api/user/getPinProjects`,{withCredentials:true})
    .then(response=>{
      console.log(response.data.pinProjects)
      setProjects(response.data?.pinProjects)
    })
    .catch(error=>{
      console.log("fatch data your work error",error)
    })
  }




  useEffect(() => {
    async function fetchData() {
      if (!user) {
        navigate("/");
        return;
      }
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
  

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  console.log("ufp", user);

  return (
    <div className="bg-[#131417] w-full h-screen flex flex-col justify-between ">
    <div className="container text-white mt-8 font-opensans">

      {/* nav 1  */}
      <div>
        <ul className="flex gap-3">
          <li className=" cursor-pointer">Pen</li>
          <li className="text-primary-dark hover:text-gray-100 cursor-pointer">Collections</li>
          <li className="text-primary-dark hover:text-gray-100 cursor-pointer">Deleted</li>
        </ul>
        
      </div>

      {/* nav 2 */}
      <div className="bg-[#1e1f26] flex flex-wrap justify-between items-center p-2 border-t-2 border-blue-400">

        <div className="flex gap-2 items-center">
          <p className="text-primary-dark">SEARCH</p>
          <div className="overflow-hidden flex items-center rounded  bg-[#2c303a]">
            <input onChange={e=>setSearchText(e.target.value)} className="focus:outline-none my-2 bg-transparent text-white px-2 placeholder-primary-dark" placeholder="Search for..." type="text" />
            <button className="text-white px-3 py-2 h-full bg-[#717790]">Search</button>
          </div>
        </div>

        <div className="flex items-center gap-1">
        <p className="text-primary-dark">VIEW</p>
        <select className="bg-[#2c303a] py-2 px-1 rounded text-sm w-[166px]" name="" id="">
          <option value="">All</option>
          <option value="">All My Pens(No fork)</option>
          <option value="">Public</option>
          <option value="">Privite</option>
          <option value="">Templates</option>
          <option value="">Fork</option>
        </select>
        </div>
      </div>

      {/* nav 3 */}
      <div className="bg-[#1e1f26] flex flex-wrap mt-[2px] justify-between items-center p-2">

          <div className="flex items-center gap-6 text-xs">
            <div className="flex gap-2 items-center">
                <p className="text-primary-dark">GRID</p>
                <div className="rounded overflow-hidden flex gap-[2px]">
                  <div className="flex items-center justify-center bg-[#2c303a] text-xl p-1"><BsFillGrid3X2GapFill/></div>
                  <div className="flex items-center justify-center bg-[#717790] text-xl p-1"><MdMenu/></div>
                  
                </div>
                <p className="text-primary-dark">LIST</p>
            </div>
            <div className="flex gap-2 items-center">
            <p className="text-primary-dark">SORT BY</p>
              <select className="bg-[#2c303a] py-2 px-1 rounded text-sm w-[140px]" name="" id="">
                <option value="">Date Created</option>
                <option value="">Date Updated</option>
                <option value="">Popularity</option>
              </select>
            </div>

            <div className="flex gap-2 items-center">
            <p className="text-primary-dark">SORT BY</p>
            <div className="rounded overflow-hidden flex gap-[2px]">
                  <div className="flex items-center justify-center bg-[#2c303a] text-xl p-1"><IoIosArrowDown /></div>
                  <div className="flex items-center justify-center bg-[#717790] text-xl p-1"><IoIosArrowUp/></div>
                  
                </div>
            </div>
            
          </div>


          <div className="flex gap-2 items-center text-xs">
            <p className="text-primary-dark">TAG</p>
            <div className="overflow-hidden flex items-center rounded  bg-[#2c303a]">
            <input className="focus:outline-none my-2 bg-transparent text-white px-2 placeholder-primary-dark" placeholder="Keyword..." type="text" />
          </div>
            
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 mb-12">
        
        {filterprojects?.map(el => (
           <div className="bg-[#1E1F26] rounded-md cursor-pointer  " key={el._id} onClick={ e => navigate(`/${el.createdBy.username}/pen/${el._id}`)}>
           <div className="h-[70%] p-3">
               {/* <img className="h-full object-cover w-full rounded-md" src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
               <iframe
                title="Result"
                srcDoc={generateWeb(el.code)}
                sandbox="allow-scripts"
                className="h-full w-full overflow-hidden"
                style={{ overflow: 'hidden' }}
              />
           </div>
           <div className="p-3">
             <div className="flex items-center justify-between">
               <p className=" font-bold">{el.name=="Untitled"? `A Pen by ${el.createdBy.username}` : el.name} </p>
               <BsThreeDots className="inline-block text-primary-dark text-2xl"/>
             </div>
             <div className="flex gap-2 mt-3">
               <div className="py-1 px-2 rounded flex items-center justify-center w-fit bg-[#717790] text-xs"><FaHeart className="mr-1"/>0</div>
               <div className="py-1 px-2 rounded flex items-center justify-center w-fit bg-[#717790] text-xs"><BiSolidMessage className="mr-1"/>0</div>
               <div className="py-1 px-2 rounded flex items-center justify-center w-fit bg-[#717790] text-xs"><IoEye className="mr-1"/>0</div>
             </div>
 
           </div>
         </div>
         
        ))}

       
        


      </div>

      
      


    </div>

    <Footer/>
    </div>
  );
}


{/* <button
className="border bg-red-600 p-3 text-white"
onClick={() => dispatch(logout())}
>
Logout
</button>
<p>User information:</p>
<p>{JSON.stringify(user)}</p> */}