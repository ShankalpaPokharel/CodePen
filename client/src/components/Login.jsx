import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { setReduxUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Button from "./common/Button";
import Footer from "./common/Footer";

import { TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";
import { apiUrl } from "../constant/variables";

export default function Login() {
  const [socialLog, setSocialLog] = useState(false);
  const [forgetClicked, setForgetClicked] = useState(false);
  const [formErrors, setFormErrors] = useState({name:null,password:null})

  const navigate = useNavigate();
  const user = useSelector(state=>state.user.value)
  useEffect(() => {
    if (user){
      navigate("/")
    }
  }, [user])
  

  const dispatch = useDispatch();

  // console.log("forgetClicked",forgetClicked)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!formData.email) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        email: "Email or Username is required",
      }));
      return;
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, email: "" }));
    }

    if (!formData.password) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        password: "Password is required",
      }));
      return;
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, password: "" }));
    }
    axios
      .post(`${apiUrl}/auth/login`, formData, { withCredentials: true })
      .then((response) => {
        console.log(response.status);
        console.log(response);
        console.log(response.data);
        if (response.status == 200) {
          dispatch(setReduxUser(response.data.user));
          navigate("/your-work");
        }
      })
      .catch((error) => {
        console.log("axios catch error", error);
        console.log(error.response?.data);
        toast.error(error.response?.data.msg);
      });
    console.log(formData);
  };

  const handleSocialAuth = (value) => {
    window.location.href = `${apiUrl}/auth/${value}`;
  };

  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-[#1b1c24]">
        <div className="mb p-4">
          <div className="relative mx-auto flex max-w-[800px] flex-col flex-wrap p-5">
            <header className="mb-5 mt-3">
              <div className="h-[24px] w-[150px] md:flex">
                <svg
                  viewBox="0 0 138 26"
                  fill="none"
                  stroke="#C7C9D3"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-[24px]"
                >
                  <path
                    d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"
                    className="h-full w-[150px]"
                  ></path>
                </svg>
              </div>

              <h1 className="mt-2 text-4xl font-bold text-primary">Log In</h1>
            </header>

            <div className="sm:flex sm:w-full">
              <div className=" mt-5 text-primary sm:flex sm:w-full">
                <div className="min-w-[40%]">
                  {/* auth social button */}
                  <button className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal" onClick={e => handleSocialAuth("google")}>
                    <FcGoogle className=" mr-4 inline-block text-4xl" />
                    <span className=" text-sm font-normal">
                      Sign Up With Google
                    </span>
                  </button>
                  <button className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal" onClick={e => handleSocialAuth("github")}>
                    <FaGithub className=" mr-4 inline-block text-4xl text-white" />
                    <span className=" text-sm font-normal">
                      Sign Up With GitHub
                    </span>
                  </button>
                  <button className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal" onClick={e => handleSocialAuth("facebook")}>
                    <FaFacebook className=" mr-4 inline-block rounded-full bg-white text-4xl text-blue-600" />
                    <span className=" text-sm font-normal">
                      Sign Up With Facebook
                    </span>
                  </button>
                  {/* auth social button end */}
                  {/* How social login works  */}
                  <div
                    className={`p-3 ${socialLog && "rounded-md  bg-[#2c303a]"}`}
                  >
                    <div
                      className=" flex items-center"
                      onClick={(e) => setSocialLog(!socialLog)}
                    >
                      <div
                        className={`mr-1 inline-block items-center text-xl text-primary ${socialLog ? null : "-rotate-90"}`}
                      >
                        <TiArrowSortedDown />{" "}
                      </div>
                      <div className=" text-base font-medium">
                        How soocial log in works
                      </div>
                    </div>
                    <p
                      className={`${socialLog ? "px-6 pt-1 text-xs" : "hidden"}`}
                    >
                      If the email address associated with your social account
                      matches the email address of your CodePen account, you'll
                      be logged in. You aren't locked to any particular social
                      account. Questions? contact support.
                    </p>
                  </div>
                  {/* How social login works end */}
                </div>

                {/* OR bar  */}
                <div className="mt-3 flex items-center sm:hidden">
                  <div className="h-[2px] w-[41%] bg-primary-dark"></div>
                  <div className="flex h-8 w-[18%] items-center justify-center rounded-xl border border-primary-dark bg-transparent text-primary-dark">
                    OR
                  </div>
                  <div className="h-[2px] w-[41%] bg-primary-dark"></div>
                </div>

                <div className="mx-5 mt-3 hidden h-full flex-col items-center sm:flex">
                  <div className="h-[40%] w-[2px] bg-primary-dark"></div>
                  <div className="flex h-[20%] w-12 items-center justify-center rounded-xl border border-primary-dark bg-transparent text-primary-dark">
                    OR
                  </div>
                  <div className="h-[40%] w-[2px] bg-primary-dark"></div>
                </div>
                {/* OR bar end */}

                <div className="min-w-[50%]">
                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-primary"
                      >
                        Username or Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                        required
                      />
                      {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-primary"
                      >
                        Choose a Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                        required
                      />
                       {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
                    </div>
                    <button className="w-full">
                      <Button
                        text="Login"
                        className="mt-7 w-full bg-[#47cf73] px-11 py-3 text-black"
                      />
                    </button>
                  </form>
                  {/* Login Form end*/}
                  {/* Forget Password  */}
                  <p
                    className="mt-6 text-center text-[#76daff] hover:text-white"
                    onClick={(e) => setForgetClicked(!forgetClicked)}
                  >
                    Forget Password?
                  </p>
                  <div
                    className={`mt-5 rounded-md bg-[#2c303a] p-5 text-primary  ${forgetClicked ? "block" : "hidden"}`}
                  >
                    <p className="text-lg font-medium">Reset Your Password</p>

                    <div className="my-4 ">
                      <form action="">
                        <label
                          htmlFor="femail"
                          className="mb-2 block text-sm font-medium text-primary"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="femail"
                          name="femail"
                          // value={formData.email}
                          // onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black outline-none focus:bg-white focus:outline-[#5a5f73] "
                          required
                        />
                        <Button
                          text="Send Password Reset Email"
                          className="my-5 bg-[#444857]"
                        />
                      </form>
                    </div>
                  </div>
                  {/* Forget Password end  */}
                </div>
              </div>
            </div>

            {/* Need a account  */}
            <p className="mt-10 text-center text-white">
              Need an account?{" "}
              <Link to={"/signup"} className=" cursor-pointer text-[#76daff]">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
        <section className="mt-auto w-full bg-black">
          <Footer />
        </section>
      </div>
    </>
  );
}
