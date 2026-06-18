import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "./Redux/Slice/profileDataSlice/profileDataSlice";

const Home = () => {
  const profileData = useSelector((state) => state.profileData.value);
  const dispatch = useDispatch();
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
        return;
      }
      alert("UserData Not Loaded");
      return;
    } catch (error) {
      console.log(error);
      alert("Error Catched");
    }
  };
  console.log(profileData);
  useEffect(() => {
    // if (profileData == {}) 
    fetchUserData();
  }, []);

  return (
    <div
      className="h-770 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
