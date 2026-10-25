import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountType = () => {
  const [accountType, setAccountType] = useState("");  
  const navigate = useNavigate();
  const accountHandler = (user) => {
     localStorage.setItem("user",user);
     setAccountType(user);
     setTimeout(()=>{
        navigate("/signup");   
     },2000);
     return;
  }  

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[rgb(25,25,25)]">
      <div className="flex h-120 w-240 rounded-2xl bg-[rgb(14,14,14)]">
        <div className="flex bg-blue-600 items-end justify-center h-full w-100 border-r-4 border-blue-600 rounded-bl-2xl rounded-tl-2xl">
          <div>
            <img
              src="../public/logo_favicon.png"
              alt=""
              className="h-35 relative left-33"
            />
            <img src="../public/students_signup_image.png" alt="" />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-gray-200 font-bold text-4xl ">Identify your account type</h1>
          <h2 className="text-gray-200 text-sm m-1">
            Join NextRole to find the best opportunities for both candidate and
            recruiters
          </h2>
          <button onClick={()=>accountHandler("candidate")} className={accountType != "candidate" ? "flex justify-center items-center h-30 w-100 rounded-xl bg-blue-600 text-2xl font-bold my-10":"flex justify-center items-center h-30 w-100 rounded-xl bg-blue-600 border-2 border-white text-2xl font-bold my-10"}>Candidate</button>
          <button onClick={()=>accountHandler("recruiter")} className={accountType != "recruiter" ? "flex justify-center items-center h-30 w-100 rounded-xl bg-blue-600 text-2xl font-bold my-10":"flex justify-center items-center h-30 w-100 rounded-xl bg-blue-600 border-2 border-white text-2xl font-bold my-10"}>Recruiter</button>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
