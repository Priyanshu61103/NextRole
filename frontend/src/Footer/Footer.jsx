import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
   const button = useSelector((state) => state.button.value);
  return (
    <div
      className={hostSwitch == "on" ? button==="on"?"relative bottom-110 h-135 w-full opacity-25":"relative bottom-60 h-135 w-full opacity-25" : button==="on"?"z-20 relative bottom-44 h-135 w-full opacity-25":"z-20 h-135 w-full opacity-100"}
      style={{ backgroundColor: "rgb(20, 20 , 20)" }}
    >
      <div className="flex gap-x-12">
        <div>
          <img src="../logo_darkmode.png" alt="" className="h-40 w-fit relative top-6" />
          <p className="text-lg text-gray-300 w-80 relative left-15 bottom-5">
            Unlock your career with personalized upskilling and career guidance.
          </p>
        </div>

        <div className="w-0.5 h-100 bg-gray-300 opacity-25 mt-10"></div>

        <div className="mt-25">
          <h1 className="text-3xl text-blue-500 font-semibold underline underline-offset-4">
            Quick Links
          </h1>
          <ul className="text-gray-300 mt-10">
            <li className="mb-5">1. Home</li>
            <li className="mb-5">2. Jobs</li>
            <li className="mb-5">3. Internships</li>
            <li className="mb-5">4. About</li>
            <li className="mb-5">5. AI Mock Interview</li>
          </ul>
        </div>

        <div className="w-0.5 h-100 bg-gray-300 opacity-25 mt-10"></div>

        <div className="mt-25">
          <h1 className="text-3xl text-blue-500 font-semibold underline underline-offset-4">
            Connect
          </h1>
          <div className="flex gap-x-5 mt-10">
            <button className="h-10 w-10 rounded-full border-2 border-blue-500 flex justify-center items-center">
              <img src="../google.png" alt="" />
            </button>
            <button className="h-10 w-10 rounded-full border-2 border-blue-500 flex justify-center items-center">
              <img src="../instagram.png" alt="" />
            </button>
            <button className="h-10 w-10 rounded-full border-2 border-blue-500 flex justify-center items-center">
              <img src="../x_icon.png" alt="" />
            </button>
            <button className="h-10 w-10 rounded-full border-2 border-blue-500 flex justify-center items-center">
              <img src="../facebook-icon.png" alt="" />
            </button>
          </div>
        </div>

        <div className="w-0.5 h-100 bg-gray-300 opacity-25 mt-10"></div>

        <div className="mt-25">
          <h1 className="text-3xl text-blue-500 font-semibold underline underline-offset-4">
            Contact
          </h1>
          <div className="text-md text-gray-300 mt-10">
            <h1 className="mb-2">Email : nextrole123@gmail.com</h1>
            <h1 className="mb-2">Phone No : +91 123456789</h1>
            <h1>Address : 123 Tech Lane , Innovation City</h1>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full flex justify-center">
        <div className="h-0.5 w-320 rounded-xl bg-blue-500 mt-8"></div>
      </div>
      <div className="text-md text-gray-300 relative top-12 flex justify-around">
        <h1>© 2026 NextRole. All Rights Reserved</h1>
        <div className="w-80 flex justify-around">
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
