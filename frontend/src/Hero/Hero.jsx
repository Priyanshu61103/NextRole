import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import { setButton } from "../Redux/Slice/buttonSlice/buttonSlice";
import Host from "../Host/Host";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../Redux/Slice/detailSlice/detailSlice";
import HeroSectionJobs from "../Hero Section Jobs/HeroSectionJobs";
import HeroSectionInternships from "../Hero Section Internships/HeroSectionInternships";
import ProfileTab from "../ProfileTab/ProfileTab";
import { setProfileTab } from "../Redux/Slice/profileTabSlice/profileTabSlice";
const Hero = () => {
  const [counter1, setCounter1] = useState(0);
  const profileData = useSelector((state) => state.profileData.value);
  const [counter2, setCounter2] = useState(0);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const saveDetails = (data) => {
    dispatch(setDetails(data));
    navigate("/jobdetails");
  };
  return (
    <div>
      {hostSwitch == "on" && <Host />}
      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? "relative bottom-110 opacity-25 z-10"
              : "relative bottom-60 opacity-25 z-10"
            : button == "on"
              ? "relative bottom-50 opacity-25 z-10"
              : "opacity-100 z-10"
        }
      >
        <div
          className={"h-125 w-full flex items-center p-10 justify-around z-0"}
          style={{ backgroundColor: "rgb(20, 20 , 20)" }}
        >
          <div>
            <div className="flex gap-x-4 text-6xl font-semibold mb-4">
              <h1 className="text-blue-500">Empower</h1>
              <h1 className="text-gray-300">Your Career</h1>
            </div>
            <div className="w-150 text-lg text-gray-300">
              <p>
                Explore opportunities from across the globe to grow, showcase
                skills, gain CV points & get hired by your dream company.
              </p>
            </div>
          </div>
          <div>
            <img src="../hero_image.png" alt="" />
          </div>
        </div>
        {profileTab && (
          <div className="flex justify-end z-100 relative bottom-132 right-5">
            <ProfileTab />
          </div>
        )}
        <div
          className={profileTab ? "relative bottom-85" : "relative bottom-0"}
        >
          <HeroSectionJobs />
          <HeroSectionInternships />
          <div>
            <div>
              <h1 className="text-4xl text-gray-300 font-semibold mt-10 mb-2 ml-15">
                AI Driven Features
              </h1>
              <p className="text-sm text-gray-300 ml-15 mb-15">
                Master your concepts with AI-Powered full-length mock tests and
                Resume Analysis for 360° preparation!
              </p>
              <div className="h-80 w-full flex justify-around">
                <div className="h-80 w-110 rounded-2xl border-2 border-gray-300">
                  <img
                    src="../ai_mock_interview_image.png"
                    alt=""
                    className="h-60 w-110 rounded-t-2xl border-b-2 border-b-gray-300"
                  ></img>
                  <div className="h-20 w-110 flex justify-around items-center">
                    <h1 className="text-xl font-semibold text-blue-500">
                      AI-Driven Mock Interview
                    </h1>
                    <Link to="/aiinterview">
                      <button className="h-10 w-25 rounded-xl bg-blue-500 text-black font-semibold p-2">
                        Start Test
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="h-80 w-110 rounded-2xl border-2 border-gray-300">
                  <img
                    src="../resume-analysis.png"
                    alt=""
                    className="h-60 w-110 rounded-t-2xl border-b-2 border-b-gray-300"
                  ></img>
                  <div className="h-20 w-110 flex justify-around items-center">
                    <h1 className="text-xl font-semibold text-blue-500">
                      Resume Analysis
                    </h1>
                    <Link to="/resume">
                      <button className="h-10 w-25 rounded-xl bg-blue-500 text-black font-semibold p-2">
                        Start
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
