import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";



export default function Protected() {
  let user = useSelector((store) => store.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    

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

