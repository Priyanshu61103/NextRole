import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import { setButton } from "../Redux/Slice/buttonSlice/buttonSlice";
import ProfileTab from "../ProfileTab/ProfileTab";
import { setProfileTab } from "../Redux/Slice/profileTabSlice/profileTabSlice";
const Navbar = () => {
  const profileData = useSelector((state)=>state.profileData.value);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state)=>state.profileTab.value);
  const dispatch = useDispatch();
  return (
    <div className={hostSwitch == "on" ? "opacity-25" : "opacity-100"}>
      <div
        className="h-25 w-full bg-black flex justify-around items-center mb-5"
        style={{ backgroundColor: "rgb(12, 12, 12)" }}
      >
        <div>
          <img src="../logo_darkmode.png" alt="" className="w-fit h-35" />
        </div>

        <Link to="/home">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-blue-400 hover:text-black">
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/jobpostings">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-blue-400 hover:text-black">
            <h1>Jobs</h1>
          </div>
        </Link>
        <Link to="/internships">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-blue-400 hover:text-black">
            <h1>Internships</h1>
          </div>
        </Link>
        <Link to="/about">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-blue-400 hover:text-black">
            <h1>About</h1>
          </div>
        </Link>
        <div className="flex gap-x-5">
          <div onClick={() => dispatch(setButton())}>
            <button
              className={
                button === "off"
                  ? "h-12 w-35 flex justify-center items-center rounded-xl text-black bg-blue-400 font-bold gap-x-2"
                  : "h-12 w-35 flex justify-center items-center rounded-xl text-black font-bold bg-blue-400 gap-x-2 z-22"
              }
            >
              <img src="../ailogo.png" alt="" className="h-5 w-5" />
              <h1>AI Features</h1>
            </button>
          </div>

          <div>
            {localStorage.getItem("user") == "recruiter" && (
              <button
                className="h-12 w-25 flex justify-center items-center rounded-xl text-black font-bold gap-x-2 bg-blue-400"
                onClick={() => dispatch(setHostSwitch())}
              >
                <img src="../plus-icon.png" alt="" className="h-5 w-5" />
                <h1>Host</h1>
              </button>
            )}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="h-10 p-5 w-50 border-2 rounded-full border-blue-400 placeholder:text-xs placeholder:text-gray-300 outline-0"
          />
        </div>
        <div onClick={()=>dispatch(setProfileTab())} className="h-15 w-15 flex justify-center items-center border-4 border-blue-600 rounded-full p-0">
          {profileData && profileData.payload && <img src={profileData.payload.profilePhoto} alt="" />}
        </div>
      </div>
      <div
        className={
          button == "on"
            ? "h-50 w-100 rounded-xl relative bottom-8 left-170 z-30"
            : "hidden"
        }
        style={{ backgroundColor: "rgb(20, 20, 20)" }}
      >
        <Link to="/aiinterview">
          <div className="h-25 w-90 m-4 border-b-2 border-b-blue-400 text-gray-300 text-xl flex items-center justify-center">
            <div className="flex gap-5">
              <img src="ailogo2.png" alt="" className="h-12 w-12" />
              <div>
                <h1 className="font-semibold">AI-Mock Interview</h1>
                <p className="text-xs">
                  {" "}
                  Master your concepts with AI-Powered full-length mock tests
                </p>
              </div>
              <div>
                <img
                  src="../plus-icon-2.png"
                  alt=""
                  className="h-6 w-8 relative top-4"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/resume">
          <div className="h-25 w-90 mx-4 text-gray-300 text-xl flex justify-center">
            <div className="flex gap-5">
              <img src="ailogo2.png" alt="" className="h-12 w-12" />
              <div>
                <h1 className="font-semibold">Resume Analysis</h1>
                <p className="text-xs">
                  {" "}
                  Gives you the most concise Resume Feedback
                </p>
              </div>
              <div>
                <img
                  src="../plus-icon-2.png"
                  alt=""
                  className="h-6 w-6 relative top-4"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
