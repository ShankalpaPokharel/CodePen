import React from "react";
import Footer from "./common/Footer";

export default function PageNotFound() {
  return (
    <div className="flex h-[97%] flex-col justify-between bg-black">
        <div className=" bg-black flex items-center text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className="text-7xl text-white font-dark font-extrabold mb-8"> 404</div>
                <p className="text-2xl md:text-3xl font-light text-white leading-normal mb-8">
                    Sorry we couldn't find the page you're looking for
                </p>
        
                <a href="#" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
        </div>
            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found"/>
            </div>
        
        </div>
        </div>
        <Footer/>
    </div>
  );
}
