import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Button from "./common/Button";
import Footer from "./common/Footer";

import { apiUrl } from "../constant/variables";
import axios from "axios";

import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import Joi from "joi";



const schema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      "string.pattern.base": "Name must only contain alphabetic characters",
      "any.required": "Name is required",
    }),
  username: Joi.string().required().messages({
    "any.required": "Username is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Invalid email",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@$!%*#?&><)(^-_])[0-9a-zA-Z.!@$!%*#?&><)(^-_]{8,100}$/,
    )
    .required()
    .messages({
      "string.base": "Password must be a string",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be at most 100 characters",
      "string.pattern.base":
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character from .@$!%*#?&><)(^-_",
      "any.required": "Password is required",
    }),
});



export default function Signup() {
  const user = useSelector(state=>state.user.value)
  const navigate = useNavigate();
  useEffect(() => {
    if (user){
      navigate("/")
    }
  }, [user])
  
  

  const [signUpEmail, setSignUpEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [backendErrors, setBackendErrors] = useState({
    email: "",
    username: "",
  });
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });
  

  const watchEmail = watch("email");
  const watchUsername = watch("username");

  const checkExists = async (type, value) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/${type}Exist`,
        { value },
        { withCredentials: true },
      );
      if (response.data.msg) {
        setError(type, {
          type: "manual",
          message: `${type.charAt(0).toUpperCase() + type.slice(1)} already exists`,
        });
        return true;
      }
    } catch (error) {
      console.error(`Error checking ${type}:`, error.message);
      return true;
    }
  };

  useEffect(() => {
    if (watchEmail) {
      checkExists("email", watchEmail);
    }
  }, [watchEmail]);

  useEffect(() => {
    if (watchUsername) {
      checkExists("username", watchUsername);
    }
  }, [watchUsername]);

  const onSubmit = async (data) => {
    // e.preventDefault();

    const emailExists = await checkExists("email", data.email);
    const usernameExists = await checkExists("username", data.username);

    if (emailExists || usernameExists) {
      console.log("Email or Username already exists.");
      return;
    }

    console.log("getting data", data);
    axios
      .post(`${apiUrl}/auth/signup`, data, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        if (response?.data.msg == "success") {
          toast.success("Successfully account created. Now you can login. ");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response?.data);
      });
  };

  const handleSocialAuth = (value) => {
    window.location.href = `${apiUrl}/auth/${value}`;
  };

  const location = useLocation();

  return (
    <>
      <div className="min-h-screen bg-[#1b1c24] pt-4">
        <div className="">
          <div className="relative mx-auto my-5 flex w-[95%] max-w-[720px] flex-col flex-wrap bg-white text-[#444857]">
            <header className="gradient-border-top bg-[#5a5f73] px-0 pb-8 pt-16 text-primary">
              <h1 className=" mb-[10px] text-center text-[64px] font-normal drop-shadow-xl">
                Free
              </h1>
              <p className="mb-4 text-center drop-shadow-md">
                Welcome to CodePen.
              </p>
            </header>
            <div className="sm:flex">
              <div className="p-4 text-primary">
                <button
                  className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal"
                  onClick={(e) => handleSocialAuth("google")}
                >
                  <FcGoogle className=" mr-4 inline-block text-4xl" />
                  <span className=" text-sm font-normal">
                    Sign Up With Google
                  </span>
                </button>
                <button
                  className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal"
                  onClick={(e) => handleSocialAuth("github")}
                >
                  <FaGithub className=" mr-4 inline-block text-4xl text-white" />
                  <span className=" text-sm font-normal">
                    Sign Up With GitHub
                  </span>
                </button>
                <button
                  className="mb-[10px] flex w-full cursor-pointer items-center rounded-md bg-[#444857] px-4 py-2 text-base font-normal"
                  onClick={(e) => handleSocialAuth("facebook")}
                >
                  <FaFacebook className=" mr-4 inline-block rounded-full bg-white text-4xl text-blue-600" />
                  <span className=" text-sm font-normal">
                    Sign Up With Facebook
                  </span>
                </button>
                <p className="text-[#444857  mb-4">Or,</p>
                <div onClick={(e) => setSignUpEmail(!signUpEmail)}>
                  <Button
                    text="Sign Up with Email"
                    className="w-fit bg-[#444857] px-4 py-3 text-sm"
                    onClick={(e) => setSignUpEmail(!signUpEmail)}
                  />
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={`${signUpEmail ? "block pt-4" : "hidden"}`}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      // value={formData.name}
                      // onChange={handleChange}
                      {...register("name")}
                      className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Choose a username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      // value={formData.username}
                      // onChange={handleChange}
                      {...register("username")}
                      className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                      required
                    />
                    <p className="text-xs text-gray-700">codepen.io/username</p>
                    {errors.username && (
                      <p className="text-red-500">{errors.username.message}</p>
                    )}
                    {backendErrors.username && (
                      <p className="text-red-500">{backendErrors.username}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      // value={formData.email}
                      // onChange={handleChange}
                      {...register("email")}
                      className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    {backendErrors.email && (
                      <p className="text-red-500">{backendErrors.email}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Choose a Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      // value={formData.password}
                      // onChange={handleChange}
                      {...register("password")}
                      className="w-full rounded-md border border-gray-300 bg-[#d5d7de] px-3 py-2 text-black focus:bg-white focus:outline-[#5a5f73] "
                      required
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="">
                    <h2 className="mb-1 text-sm text-gray-700">
                      Your Password must
                    </h2>
                    <ul className="mx-2 mb-2 list-disc pl-4 text-xs text-gray-700">
                      <li>Include an UPPER and lowercase letter</li>
                      <li>Include a number</li>
                      <li>
                        Include one or more of these special characters:
                        .@$!%*#?&amp;&gt;&lt;)(^-_
                      </li>
                      <li>Be between 8 and 100 characters</li>
                    </ul>
                  </div>
                  <button>
                    <Button
                      text="Submit"
                      className="mt-4 w-fit bg-[#47cf73] px-11 py-3 !text-2xl"
                    />
                  </button>
                </form>

                <p className="mt-2 text-sm text-gray-700">
                  By signing up, you agree to CodePen's{" "}
                  <span className="text-[#30a9f4]">Terms of Service</span> ,{" "}
                  <span className="text-[#30a9f4]">Code of Conduct</span> , and{" "}
                  <span className="text-[#30a9f4]">Privacy Policy</span> .
                </p>
              </div>

              <div className="w-full  bg-[#444857] p-4 text-primary-dark sm:max-w-[33%]">
                <div className="mb-4">
                  <h2 className="border-b-2 border-[#868ca0] pb-2 text-sm font-semibold text-white ">
                    FREE
                  </h2>
                  <div className="flex justify-between pt-2">
                    <span>Deploys</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom Domains</span>
                    <span>0</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="border-b-2 border-[#868ca0] pb-2 text-sm font-semibold text-white">
                    PEN & PROJECT VIEWS
                  </h2>
                  <div className="flex justify-between">
                    <span>Editor View</span>
                    <span>✅</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Full View</span>
                    <span>✅</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Details View</span>
                    <span>✅</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shareable Debug View</span>
                    <span>⛔</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="border-b-2 border-[#868ca0] pb-2 text-sm font-semibold text-white">
                    PEN FEATURES
                  </h2>
                  <div className="flex justify-between">
                    <span>Collab Mode</span>
                    <span>⛔</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professor Mode</span>
                    <span>⛔</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Presentation View</span>
                    <span>⛔</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="border-b-2 border-[#868ca0] pb-2 text-sm font-semibold text-white">
                    ASSET HOSTING
                  </h2>
                  <div className="flex justify-between">
                    <span>Storage</span>
                    <span>⛔</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="border-b-2 border-[#868ca0] pb-2 text-sm font-semibold text-white">
                    NEED MORE?
                  </h2>
                  <div className="mb-5 mt-2 rounded bg-yellow-200 p-4 text-center text-zinc-800">
                    <p>
                      Unlock the full power of CodePen{" "}
                      <a href="#" className="text-[#1f798f] underline">
                        with our PRO plans.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1b1c24] ">
              <p className="py-8 text-center">
                <span className="text-[#76daff]">Terms of Service</span> ·{" "}
                <span className="text-[#76daff]">Privacy Policy</span> ·{" "}
                <span className="text-[#76daff]">Code of Conduct</span>
              </p>
            </div>
          </div>
          {/* work on later */}
          {/* <div>
                <p><span className="bg-[#76daff]">Terms of Service</span> · <span className="bg-[#76daff]">Privacy Policy</span> · <span className="bg-[#76daff]">Code of Conduct</span></p>
            </div> */}
        </div>
        <section className="w-full bg-black">
          <Footer />
        </section>
      </div>
    </>
  );
}
