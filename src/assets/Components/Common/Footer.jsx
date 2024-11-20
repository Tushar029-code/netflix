import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-[100%] p-1 bg-black">
        <div className="max-w-[1170px] mx-auto p-5 text-white ">
          <div className="  my-11">
            <button className=" w-full font-semibold bg-red-600   rounded-md text-white text-[25px]">
              Finish Sign-Up
            </button>
          </div>
          <div className="my-5">
            <p>Questions? Call 000-800-919-1694</p>
          </div>
        <div className="grid sm:grid-cols-4 grid-cols-1   ">
          <div className="">
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>Account</li>
              <li> Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>Media Centre</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
          <div className="my-5  ">
            <select name="" id="" className="bg-black border-2 text-white">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>
          <div className="my-5">
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </>
  );
}






                  










