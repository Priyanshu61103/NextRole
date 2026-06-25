import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  Award,
  Building2,
  CalendarRange,
  DockIcon,
  Edit,
  GraduationCap,
  LocateFixedIcon,
  LocateIcon,
  LocationEdit,
  LogOutIcon,
  MapPin,
  Share,
  Share2,
  University,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { setProfileData } from "../Redux/Slice/profileDataSlice/profileDataSlice";
import ProfileTab from "../ProfileTab/ProfileTab";
import Host from "../Host/Host";

const RecruiterProfilePage = () => {
  const profileData = useSelector((state) => state.profileData.value);
  console.log(profileData);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        setArr(data.result.targetRoles);
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
    else setArr(profileData.payload.targetRoles);
  }, []);

  console.log(arr);

  const logOutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className={
        profileTab ? "h-650 w-full text-white" : "h-fit w-full text-white"
      }
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      {profileData && profileData.payload && (
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "relative bottom-115 opacity-25 z-10"
                : "relative bottom-65 opacity-25 z-10"
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
                    className="w-249 h-100 rounded-t-4xl"
                  />
                </div>
              )}
              <div className="lg:w-250 w-100 h-fit border-2 border-blue-600 p-10 pt-2 pl-12 rounded-b-4xl">
                {profileData && profileData.payload && (
                  <div className="flex flex-wrap h-40 gap-5 items-center justify-between">
                    <div className="flex gap-x-10">
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
                        <div className="w-40 flex flex-wrap gap-2">
                          <div className="flex items-center gap-x-5">
                            <div>
                              <button className="border-2 border-gray-300 rounded-lg p-1">
                                <Building2 size={20} />
                              </button>
                            </div>
                            <a href={profileData.payload.companyWebsite}>
                              <div className="text-blue-500 font-semibold">
                                {profileData.payload.companyName}
                              </div>
                            </a>
                          </div>
                          <div className="flex items-center gap-x-5">
                            <div>
                              <button className="border-2 border-gray-300 rounded-lg p-1">
                                <MapPin size={20} />
                              </button>
                            </div>
                            <button className="text-white font-semibold cursor-pointer">
                              {profileData.payload.companyLocation}
                            </button>
                          </div>
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
                      <Link to="/recruiter-edit-profile">
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
                    {profileData.payload.summary != "" ? (
                      <p className={"text-white mt-5 text-md font-medium"}>
                        {profileData.payload.summary}
                      </p>
                    ) : (
                      <p
                        className={
                          "text-gray-600 mt-5 text-md font-medium flex justify-center"
                        }
                      >
                        No About Added
                      </p>
                    )}
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
                          Target Roles
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
              </div>
            </div>
          </div>
        </div>
      )}
      {profileTab && (
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "flex justify-end z-100 relative bottom-415 right-5"
                : "flex justify-end z-100 relative bottom-365 right-5"
              : button == "on"
                ? "flex justify-end z-100 relative bottom-355 right-5"
                : "flex justify-end z-100 relative bottom-300 right-5"
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

export default RecruiterProfilePage;
