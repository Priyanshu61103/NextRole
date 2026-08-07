import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer/Footer.jsx";
import ProfileTab from "../ProfileTab/ProfileTab";
import Host from "../Host/Host.jsx";
import { useSelector , useDispatch} from "react-redux";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ResumeInput from "./ResumeInput.jsx";
import { resumeInputButtonSlice, setResumeInputButton } from "../Redux/Slice/ResumeInputButtonSlice/resumeInputButtonSlice.js";
import { useNavigate } from "react-router-dom";
const Interview = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const resumeInputButton = useSelector((state)=>state.resumeInputButton.value); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="h-fit w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      {profileTab && (
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "flex justify-end z-100 relative bottom-117 right-5"
                : "flex justify-end z-100 relative bottom-67 right-5"
              : button == "on"
                ? "flex justify-end z-100 relative bottom-57 right-5"
                : "flex justify-end z-100 relative bottom-7 right-5"
          }
        >
          <ProfileTab />
        </div>
      )}
      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? profileTab
                ? "relative bottom-200 opacity-25 z-10 flex gap-10 m-7"
                : "relative bottom-115 opacity-25 z-10 flex gap-10 m-7"
              : profileTab
                ? "relative bottom-155 opacity-25 z-10 flex gap-10 m-7"
                : "relative bottom-65 opacity-25 z-10 flex gap-10 m-7"
            : button == "on"
              ? profileTab
                ? "relative bottom-140 opacity-25 z-10 flex gap-10 m-7"
                : "relative bottom-55 opacity-25 z-10 flex gap-10 m-7"
              : profileTab
                ? "opacity-100 relative bottom-90 z-10 flex gap-10 m-7"
                : "opacity-100 z-10 flex gap-10 m-7"
        }
      >
        <div className="h-100 w-screen bg-blue-100 flex justify-around items-center rounded-2xl z-10">
          <div>
            <div className="w-160 text-gray-800 text-6xl font-bold">
              AI Mock Interview Practice
            </div>
            <div className="text-gray-700 font-semibold mt-5 text-lg">
              Master your concepts with full-length AI-Powered mock interviews
              for 360° preparation!
            </div>
            <button
              className="bg-black text-white p-4 flex gap-x-4 mt-10 rounded-2xl"
              onClick={() => dispatch(setResumeInputButton())}
            >
              <h1 className="font-bold">Start Interview</h1>
              <ArrowBigRight />
            </button>
          </div>
          <div>
            <img src="../faang-logo.webp" />
          </div>
        </div>
      </div>
      {resumeInputButton && (
        <div
          className={
            hostSwitch === "on"
              ? button === "on"
                ? profileTab
                  ? "relative bottom-305 z-20"
                  : "relative bottom-220 z-20"
                : profileTab
                  ? "relative bottom-255 z-20"
                  : "relative bottom-170 z-20"
              : button === "on"
                ? profileTab
                  ? "relative bottom-245 z-20"
                  : "relative bottom-160 z-20"
                : profileTab
                  ? "relative bottom-195 z-20"
                  : "relative bottom-105 z-20"
          }
        >
          <ResumeInput />
        </div>
      )}
      <div
        className={
          hostSwitch === "on"
            ? button === "on"
              ? profileTab
                ? resumeInputButton
                  ? "relative bottom-177 text-gray-300 text-lg"
                  : "relative bottom-90 text-gray-300 text-lg"
                : resumeInputButton
                  ? "relative bottom-92 text-gray-300 text-lg"
                  : "relative bottom-5 text-gray-300 text-lg"
              : profileTab
                ? resumeInputButton
                  ? "relative bottom-177 text-gray-300 text-lg"
                  : "relative bottom-90 text-gray-300 text-lg"
                : resumeInputButton
                  ? "relative bottom-92 text-gray-300 text-lg"
                  : "relative bottom-5 text-gray-300 text-lg"
            : button === "on"
              ? profileTab
                ? resumeInputButton
                  ? "relative bottom-177 text-gray-300 text-lg"
                  : "relative bottom-90 text-gray-300 text-lg"
                : resumeInputButton
                  ? "relative bottom-92 text-gray-300 text-lg"
                  : "relative bottom-5 text-gray-300 text-lg"
              : profileTab
                ? resumeInputButton
                  ? "relative bottom-177 text-gray-300 text-lg"
                  : "relative bottom-90 text-gray-300 text-lg"
                : resumeInputButton
                  ? "relative bottom-87 text-gray-300 text-lg"
                  : "relative text-gray-300 text-lg"
        }
      >
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Interview;
