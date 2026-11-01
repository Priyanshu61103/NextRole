import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Apply = () => {
  const { id } = useParams();
  const profileData = useSelector((state)=>state.profileData.value);
  console.log(profileData);
  return (
    <div
      className="h-700 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      <div>
        <h1 className="font-bold text-6xl text-blue-600 text-center">
          Please Fill in the Details
        </h1>
        <p className="font-semibold text-lg text-gray-200 text-center mb-5">
          Please Fill the details to apply for this specific job
        </p>
        <div className="flex justify-center items-center">
            <div className="w-300 p-10 bg-[rgb(21,21,21)] p-10 rounded-4xl flex justify-around">
          <form
            action=""
          >
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
                className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm"
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
                className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm"
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
                className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm"
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
                className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 my-2 placeholder:text-sm"
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
                className="outline-0 w-100 border-2 border-blue-600 rounded-xl p-2 mt-2 mb-5 placeholder:text-sm"
              />
            </div>

            <div className="w-100">
              <h1 htmlFor="resume" className="font-semibold mb-2">
                Resume
              </h1>
              <input type="file" name="resume" id="resume" className="hidden" />
              <label
                htmlFor="resume"
                className="w-100 flex justify-center items-center bg-blue-600 rounded-xl p-2 font-semibold mb-5"
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
                className="border-2 border-blue-600 outline-0 rounded-xl w-100 p-2 mb-5 font-semibold text-white mt-2"
              >
                <option className="text-blue-600 font-semibold bg-[rgb(25,25,25)]">
                  Please Select Option
                </option>
                <option className="text-blue-600 font-semibold bg-[rgb(25,25,25)]">
                  Immediately
                </option>
                <option className="text-blue-600 font-semibold bg-[rgb(25,25,25)]">
                  Less than 15 days
                </option>
                <option className="text-blue-600 font-semibold bg-[rgb(25,25,25)]">
                  Less than 30 days
                </option>
              </select>
            </div>
            <div className="w-100">
              <label className="font-semibold">Why should we hire you ?</label>
              <textarea
                rows="10"
                cols="60"
                className="border-2 border-blue-600 rounded-xl mt-2 p-2 outline-0 placeholder:font-semibold"
                placeholder="Please Write your answer"
              ></textarea>
            </div>
            <div className="flex justify-center items-center my-5">
              <button className="h-10 w-40 flex justify-center items-center bg-blue-600 rounded-2xl font-semibold">
                Submit
              </button>
            </div>
          </form>
           <img src="../public/target_icon.png" className="h-100 w-fit"/>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Apply;
