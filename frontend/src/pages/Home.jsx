import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../utils/redux/slice/profileDataSlice/profileDataSlice";

const Home = () => {
  const profileData = useSelector((state) => state.profileData.value);
  const dispatch = useDispatch();
  const VITE_BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/fetch-user-data`, {
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
      if (!response.ok) return;
      if (data.success) {
        dispatch(setProfileData(data.result));
        return;
      }
      return;
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
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
