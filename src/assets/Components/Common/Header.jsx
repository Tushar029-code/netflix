import React from "react";
import logo from "../../../images/logo.png";
import { IoLanguageSharp } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <section className=" w-[100%] h-[100vh] bg-[url('images/banner.jpg')] bg-cover bg-center">
        <div className=" w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <div className=" max-w-[1170px] mx-auto grid grid-cols-2  items-center text-white">
            <div className="sm:w-[200px] w-[150px] ">
              <img src={logo} alt="" />
            </div>
            <div className="flex gap-3 justify-end">
              <select
                name=""
                id=""
                className="bg-black  rounded p-1 sm:px-4 sm:py-1"
              >
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
              <div className="">
                <button className="bg-red-600 sm:py-1 p-1 rounded sm:px-2">
                  Sing Up
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1170px] sm:mt-[100px] mt-[25px] mx-auto ">
            <div className=" text-white text-center font-bold  sm:text-[55px] text-[35px]">
              <h2>Unlimited movies,</h2>
              <p> TV shows and more</p>
            </div>
            <div className="text-white text-center font-bold  sm:text-[18px]  :text-[12px]">
              <p className="sm:mb-8 mt-5 mb-3">Starts at ₹149. Cancel at any time.</p>
              <h4>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <div className="grid sm:grid-cols-[70%_30%] grid-cols-1 p-2 gap-2  mt-4 max-w-[500px] mx-[auto]">
                <input type="text" placeholder="Email Address" className="p-3 bg-transparent rounded border-2  border-gray-700 outline-none"/>
                <button className="bg-red-600 rounded p-3  ">Get Start</button>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* end pof part  */}
      
      
    </>
  );
}
