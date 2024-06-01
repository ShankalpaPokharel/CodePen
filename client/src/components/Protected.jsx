import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import axios from "axios";
import { apiUrl } from "../constant/variables";

export default function Protected() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user =5;

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get(`${apiUrl}/api/user/userInfo`, { withCredentials: true });
        console.log("userinfo response", response.data);
      } catch (error) {
        console.log("User info error", error);
      }
    }

    fetchData();
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log("ufp", user);

  return (
    <div>
      <button
        className="border bg-red-600 p-3 text-white"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
      <p>User information:</p>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
