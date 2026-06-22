import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  Award,
  CalendarRange,
  DockIcon,
  Edit,
  GraduationCap,
  LogOutIcon,
  Share,
  Share2,
  University,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { setProfileData } from "../Redux/Slice/profileDataSlice/profileDataSlice";
import ProfileTab from "../ProfileTab/ProfileTab";

const ProfilePage = () => {
  const profileData = useSelector((state) => state.profileData.value);
  console.log(profileData);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projectArray = [];
  const workExperienceArray = [];
  if (profileData && profileData.payload) {
    const projects = profileData.payload.projects;
    const workExperience = profileData.payload.workExperience;
    for (let i = 0; i < projects.length; i++) {
      const projectObj = {};
      const projectArr = projects[i].split("=");
      projectObj.title = projectArr[1];
      projectObj.description = projectArr[3];
      projectArray.push(projectObj);
    }
    for (let i = 0; i < workExperience.length; i++) {
      const workExperienceObj = {};
      const workExperienceArr = workExperience[i].split("=");
      workExperienceObj.title = workExperienceArr[1];
      workExperienceObj.description = workExperienceArr[3];
      workExperienceArray.push(workExperienceObj);
    }
  }
  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3200/fetch-user-data", {
        method: "POST",
        body: JSON.stringify({
          userName: localStorage.getItem("userName"),
          user: localStorage.getItem("user"),
        }),
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (!response) return;
      if (data.success) {
        dispatch(setProfileData(data.result));
        setArr(data.result.skills);
        console.log("Running...");
        return;
      }
      alert("UserData Not Loaded");
      return;
    } catch (error) {
      console.log(error);
      alert("Error Catched");
    }
  };

  useEffect(() => {
    if (!profileData || !profileData.payload) fetchUserData();
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className={
        profileTab ? "h-800 w-full text-white" : "h-fit w-full text-white"
      }
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />

      {profileData && profileData.payload && (
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "relative bottom-110 opacity-25 z-10"
                : "relative bottom-60 opacity-25 z-10"
              : button == "on"
                ? "relative bottom-55 z-10 opacity-25"
                : "opacity-100 z-10"
          }
        >
          <div className="relative top-10">
            <div className="w-full min-h-200 flex flex-wrap justify-center mt-10 lg:mb-30 mb-40">
              {profileData && profileData.payload && (
                <div className="border-2 border-blue-600 rounded-t-4xl">
                  <img
                    src={profileData.payload.coverPhoto}
                    alt=""
                    className="w-249 h-80 rounded-t-4xl"
                  />
                </div>
              )}
              <div className="lg:w-250 w-100 h-fit border-2 border-blue-600 p-10 pt-2 pl-12 rounded-b-4xl">
                {profileData && profileData.payload && (
                  <div className="flex flex-wrap h-40 gap-5 items-center justify-around">
                    <div className="flex h-40 w-40 rounded-full bg-white gap-x-2 items-center justify-around mb-5">
                      <img
                        src={profileData.payload.profilePhoto}
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h1
                        className={
                          "lg:text-3xl text-lg text-gray-300 font-semibold"
                        }
                      >
                        {profileData.payload.firstName}{" "}
                        {profileData.payload.lastName}
                      </h1>
                      <p
                        className={
                          "lg:text-lg text-xs font-semibold text-blue-500 mb-5"
                        }
                      >
                        {profileData.payload.userName}
                      </p>
                      <div className="w-140 flex flex-wrap gap-2">
                        <div className="flex items-center gap-x-5">
                          <div>
                            <button className="border-2 border-gray-300 rounded-lg p-1">
                              <University size={20} />
                            </button>
                          </div>
                          <div className="font-semibold">
                            {profileData.payload.collegeName}
                          </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                          <div>
                            <button className="border-2 border-gray-300 rounded-lg p-1">
                              <DockIcon size={20} />
                            </button>
                          </div>
                          <a href={profileData.payload.resume}>
                            <button className="text-blue-400 font-semibold cursor-pointer">
                              Resume
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="h-50 flex flex-col justify-around">
                      <div className="flex gap-x-2">
                        <button className="border-2 border-gray-300 p-1 rounded-lg cursor-pointer">
                          <Share2 />
                        </button>
                        <button
                          onClick={logOutHandler}
                          className="border-2 border-gray-300 p-1 rounded-lg cursor-pointer"
                        >
                          <LogOutIcon />
                        </button>
                      </div>
                      <Link to="/edit-profile">
                        <button className="flex gap-x-2 bg-blue-500 p-2 rounded-3xl relative right-6 cursor-pointer">
                          <Edit />
                          <h1 className="font-semibold">Edit Profile</h1>
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
                <div className="flex lg:gap-x-10 gap-5 flex-wrap"></div>
                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="m-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      About
                    </h1>
                    <p className={"text-white mt-5 text-md font-medium"}>
                      {profileData.payload.summary}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="m-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Resume
                    </h1>
                    <a href={profileData.payload.resume}>
                      <button className="flex justify-center items-center gap-x-2 border-2 border-blue-600 rounded-2xl p-2 mt-4">
                        <button className="border-2 border-gray-300 rounded-lg">
                          <img
                            src="../pdfIcon.png"
                            alt=""
                            className="h-7 w-7"
                          />
                        </button>
                        {profileData.payload.firstName}{" "}
                        {profileData.payload.lastName} Resume
                      </button>
                    </a>
                  </div>
                </div>
                {profileData &&
                  profileData.payload &&
                  arr &&
                  arr.length > 1 && (
                    <div>
                      <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                      <div className="mt-5 ml-0">
                        <h1 className={"text-xl font-semibold text-gray-300"}>
                          Skills
                        </h1>
                        <div className="mt-5 lg:w-235 w-80 flex gap-x-5 gap-y-2 flex-wrap">
                          {arr.map((data) => (
                            <div>
                              <button className="min-h-10 min-w-30 rounded-full border-2 text-gray-300 border-blue-400 font-semibold p-2">
                                {data}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="mt-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Education
                    </h1>
                    <div className="flex gap-x-7 items-center">
                      <div>
                        <button className="border-2 border-gray-300 rounded-lg p-1 relative top-3">
                          <University size={45} />
                        </button>
                      </div>
                      <div className="mt-5 lg:w-235 w-80 flex gap-x-5 gap-y-2 flex-wrap">
                        <div>
                          <div className="font-semibold text-white">
                            {profileData.payload.collegeName}
                          </div>
                          <div className="text-sm text-blue-400 mt-1">
                            <div className="flex gap-x-2">
                              <GraduationCap color={"gray"} />
                              <h1>
                                Graduation-{profileData.payload.course}-
                                {profileData.payload.specialization}
                              </h1>
                            </div>
                            <div className="flex gap-x-4">
                              <div className="flex gap-x-2">
                                <CalendarRange color={"gray"} />
                                <h1>
                                  {profileData.payload.startingYear}-
                                  {profileData.payload.yearOfGraduation}
                                </h1>
                              </div>
                              <div className="flex gap-x-2">
                                <Award color={"gray"} />
                                <h1>
                                  CGPA-
                                  {profileData.payload.cgpa}
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-x-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="mt-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Work Experience
                    </h1>
                    {workExperienceArray.length > 0 
                    ? (
                      workExperienceArray.map((itr, index) => (
                        <div
                          ke={index}
                          className="border-2 border-blue-500 rounded-2xl p-2 my-4"
                        >
                          <div className="text-lg font-semibold text-blue-400 underline">
                            {itr.title}
                          </div>
                          <div className="text-sm text-gray-300 mt-4">
                            {itr.description}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm w-full flex justify-center font-semibold text-gray-400">
                        No Work Experience Added Yet
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="mt-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Projects
                    </h1>
                    {projectArray.length > 0 ? (
                      projectArray.map((itr, index) => (
                        <div
                          ke={index}
                          className="border-2 border-blue-500 rounded-2xl p-2 my-4"
                        >
                          <div className="text-lg font-semibold text-blue-400 underline">
                            {itr.title}
                          </div>
                          <div className="text-sm text-gray-300 mt-4">
                            {itr.description}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm w-full flex justify-center font-semibold text-gray-400">
                        No Projects Added Yet
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="h-0.5 lg:w-220 w-70 mt-10 bg-blue-500"></div>
                  <div className="mt-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Achievements
                    </h1>
                    {profileData.payload.achievements.length > 0 &&
                    profileData.payload.achievements[0].trim() != "" ? (
                      profileData.payload.achievements.map((itr, index) => (
                        <div
                          key={index}
                          className="border-2 border-blue-500 rounded-2xl p-4 my-4"
                        >
                          <div className="text-sm text-gray-300">
                            {itr}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm w-full flex justify-center font-semibold text-gray-400">
                        No Achievements Added Yet
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {profileTab && (
        <div
          className={
            button == "on"
              ? "flex justify-end z-100 relative bottom-445 right-5"
              : "flex justify-end z-100 relative bottom-390 right-5"
          }
        >
          <ProfileTab />
        </div>
      )}
      <div className={profileTab ? "relative bottom-100" : "relative bottom-0"}>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
