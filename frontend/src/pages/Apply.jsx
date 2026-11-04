import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Host from "../components/Host";
import ProfileTab from "../components/ProfileTab";
import { toast } from "react-toastify";

const Apply = () => {
  const { id } = useParams();
  const location = useLocation();
  const { mode } = location.state;
  const profileData = useSelector((state) => state.profileData.value);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const button = useSelector((state) => state.button.value);
  const [join, setJoin] = useState("");
  const [joinValidity, setJoinValidity] = useState(true);
  const [hire, setHire] = useState("");
  const [hireValidity, setHireValidity] = useState(true);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (join == "") {
        setJoinValidity(false);
        toast.error("Please Fill Joining Details");
        return;
      } else if (hire == "" || hire.length < 50) {
        setHireValidity(true);
        toast.error("Keep why should we hire you atleast of 50 characters");
        return;
      }

      const applicantData = {
        mode,
        firstName: profileData.payload.firstName,
        lastName: profileData.payload.lastName,
        mobileNumber: profileData.payload.mobileNumber,
        email: profileData.payload.email,
        cgpa: profileData.payload.cgpa,
        resume: profileData.payload.resume,
        applicantId:profileData.payload._id,
        join: join,
        hire: hire
      };

      const response = await fetch(`${VITE_BACKEND_URL}/apply/${id}`, {
        "credentials": "include",
        "method": "POST",
        "body": JSON.stringify(applicantData),
        "headers":{
            "content-type":"application/json"
        }
      });

      if (!response.ok) {
        toast.error("Internal Server Error");
        return;
      }

      const data = await response.json();

      if (data.success) {
        toast.success(`Hooray 🎉! Your Application is Sent for the ${mode}.`);
        navigate("/");
        return;
      }
      toast.error(`Your Application is not sent for the ${mode}.`);
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <div
      className="h-700 w-full text-white"
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
                ? "relative bottom-195 opacity-25 z-10"
                : "relative bottom-110 z-10 opacity-25"
              : profileTab
                ? "relative bottom-145 opacity-25 z-10"
                : "relative bottom-60 z-10 opacity-25"
            : button == "on"
              ? profileTab
                ? "relative bottom-135 z-10 opacity-25"
                : "relative bottom-50 opacity-25 z-10"
              : profileTab
                ? "relative bottom-85 z-10"
                : "z-10"
        }
      >
        <h1 className="font-bold text-6xl text-blue-600 text-center">
          Please Fill in the Details
        </h1>
        <p className="font-semibold text-lg text-gray-200 text-center mb-5">
          Please Fill the details to apply for this specific job
        </p>
        <div className="flex justify-center items-center">
          <div className="w-300 p-10 bg-[rgb(21,21,21)] p-10 rounded-4xl flex justify-around">
            <form action="">
              <div className="w-100">
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={profileData.payload.firstName}
                  placeholder="Please Enter First Name"
                  className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm opacity-40"
                />
              </div>
              <div className="w-100">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={profileData.payload.lastName}
                  placeholder="Please Enter Last Name"
                  className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm opacity-40"
                />
              </div>
              <div className="w-100">
                <label htmlFor="email" className="font-semibold">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profileData.payload.email}
                  placeholder="Please Enter Email ID"
                  className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm opacity-40"
                />
              </div>
              <div className="w-100">
                <label htmlFor="cgpa" className="font-semibold">
                  CGPA
                </label>
                <input
                  type="cgpa"
                  name="cgpa"
                  id="cgpa"
                  value={profileData.payload.cgpa}
                  placeholder="Please Enter CGPA"
                  className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm opacity-40"
                />
              </div>
              <div className="w-100">
                <label htmlFor="contact" className="font-semibold">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  value={profileData.payload.mobileNumber}
                  placeholder="Please Enter Contact Number"
                  className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 mt-2 mb-5 placeholder:text-sm opacity-40"
                />
              </div>

              <div className="w-100">
                <h1 htmlFor="resume" className="font-semibold mb-2">
                  Resume
                </h1>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="w-100 flex justify-center items-center bg-blue-600 rounded-xl p-2 font-semibold mb-5 opacity-40"
                >
                  Resume
                </label>
              </div>

              <div className="w-100">
                <label htmlFor="joinDays" className="font-semibold">
                  When will you be ready to join ?
                </label>
                <select
                  id="joinDays"
                  className={
                    joinValidity
                      ? "border-2 border-blue-600 outline-0 rounded-xl w-100 p-2 mb-5 font-semibold text-white mt-2"
                      : "border-2 border-red-600 outline-0 rounded-xl w-100 p-2 mb-5 font-semibold text-white mt-2"
                  }
                  onChange={(event) => {
                    setJoin(event.target.value);
                    setJoinValidity(true);
                  }}
                >
                  <option
                    value=""
                    className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                  >
                    Please Select Option
                  </option>
                  <option
                    value="immediately"
                    className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                  >
                    Immediately
                  </option>
                  <option
                    value="lessThan15Days"
                    className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                  >
                    Less than 15 days
                  </option>
                  <option
                    value="lessThan30Days"
                    className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                  >
                    Less than 30 days
                  </option>
                </select>
              </div>
              <div className="w-100">
                <label className="font-semibold">
                  Why should we hire you ?
                </label>
                <textarea
                  rows="10"
                  cols="60"
                  className={
                    hireValidity
                      ? "border-2 border-blue-600 rounded-xl mt-2 p-2 outline-0 placeholder:font-semibold"
                      : "border-2 border-red-600 rounded-xl mt-2 p-2 outline-0 placeholder:font-semibold"
                  }
                  placeholder="Please Write your answer"
                  onChange={(event) => {
                    setHire(event.target.value);
                    setHireValidity(true);
                  }}
                ></textarea>
              </div>
              <div className="flex justify-center items-center my-5">
                <button
                  onClick={submitHandler}
                  className="h-10 w-40 flex justify-center items-center bg-blue-600 rounded-2xl font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
            <img src="../public/target_icon.png" className="h-100 w-fit" />
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Apply;
