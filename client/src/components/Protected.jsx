import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import axios from "axios"

import {apiUrl} from "../constant/variables"

export default function Protected() {
  let user = useSelector((store) => store.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${apiUrl}/api/user/userInfo`,{withCredentials: true})
    .then((response)=>{
      console.log("userinfo response",response.data)
    })
    .catch(error=>{
      console.log("User info error",error)
    })

  }, [])
  


  return (
    <div>
      <button
        className=" border bg-red-600 p-3 text-white"
        onClick={(e) => dispatch(logout())}
      >
        logout
      </button>

      <p>User information:</p>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

