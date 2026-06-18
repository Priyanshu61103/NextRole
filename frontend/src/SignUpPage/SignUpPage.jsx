import React from "react";
import SignUp from "../SignUp/SignUp";

const signUpPage = () => {
  return (
    <div
      className="min-w-screen min-h-screen flex justify-center items-center bg-[url(../job.png)] bg-cover"
    >
      <SignUp />
    </div>
  );
};

export default signUpPage;
