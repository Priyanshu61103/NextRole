import React from "react";
import Login from "../Login/Login";

const LoginPage = () => {
  return (
    <div
      className="min-w-screen min-h-screen bg-[url(../job.png)] bg-cover"
    >
      <img src="../logo_darkmode.png" alt="" className="h-40 w-fit" />
      <div className="h-80 flex ml-20 items-center justify-around">
        <div>
          <h1 className="text-gray-300 text-5xl font-bold">
            Potential Unlocked,Paths Paved
          </h1>
          <h2 className="text-blue-400 text-2xl font-semibold">
            Claim your competitive edge on NextRole
          </h2>
        </div>
        <div className="mt-10">
            <Login/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
