import React, { useState } from "react";
import Navbar from "../components/Navbar";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPasswordValidity, setConfirmPasswordValidity] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const location = useLocation();
  const {signUpData} = location.state;
  const navigate = useNavigate();
  
   const passwordChecker = () => {
    if (password.trim() == "") {
      setPasswordValidity("Please give your Password");
      return false;
    }
    let capital = 0,
      small = 0,
      number = 0,
      specialChar = 0,
      space = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "a" && password[i] <= "z") small++;
      else if (password[i] >= "A" && password[i] <= "Z") capital++;
      else if (password[i] >= "0" && password[i] <= "9") number++;
      else if (password[i] == " ") space++;
      else specialChar++;
    }

    if (capital == 0) {
      setPasswordValidity("Password must contain a capital letter");
      return false;
    } else if (small == 0) {
      setPasswordValidity("Password must contain a Lowercase letter");
      return false;
    } else if (number == 0) {
      setPasswordValidity("Password must contain a number");
      return false;
    } else if (specialChar == 0) {
      setPasswordValidity("Password must contain a special character");
      return false;
    }

    return true;
  };


  const submitHandler = async(event) => {
     try{
        if(!passwordChecker())
        return;
        if(confirmPassword != password){
           setConfirmPasswordValidity("Your Password is not same as Confirm Password");
           return;  
        }
        toast.success("Your Password is Created Successfully");
        signUpData.password = password;
        navigate("/profile-details",{state:{signUpData}});
     }catch(error){
        console.log(error);
        toast.error("Internal Server Error");
     }
  }

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[url(../job.png)] bg-cover">
      <div className="h-fit w-100 bg-white rounded-2xl p-4">
        <div className="text-center">
          <h1 className="font-bold text-md lg:text-lg">Create Password</h1>
          <p className="text-xs lg:text-sm text-gray-600">
            Please create a password for your account
          </p>
          <div className="flex justify-center items-center">
            <div className="my-4">
              <h1
                htmlFor="password"
                className="font-semibold text-xs lg:text-sm mb-1 flex justify-start"
              >
                Password
              </h1>
              <div
                className="flex lg:w-80 w-64 border-2 p-2 rounded-lg border-gray-200 justify-between items-center"
                style={
                  passwordValidity == ""
                    ? { border: "2px solid gray" }
                    : { border: "2px solid red" }
                }
              >
                {!passwordVisibility ? (
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-76 outline-none placeholder:text-xs lg:text-sm"
                    id="password"
                    onChange={(event) => {
                      setPasswordValidity("");
                      setPassword(event.target.value);
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Create a password"
                    className="w-76 outline-none placeholder:text-sm"
                    id="password"
                    onChange={(event) => {
                      setPasswordValidity("");
                      setPassword(event.target.value);
                    }}
                  />
                )}
                <img
                  src="https://ik.imagekit.io/priyanshu61103/password-eye-icon.png"
                  alt=""
                  className="h-6 w-7"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                />
              </div>
              <p className="text-red-500">{passwordValidity}</p>
              <div className="my-4">
                <h1
                  htmlFor="confirm-password"
                  className="font-semibold text-xs lg:text-sm mb-1 flex justify-start"
                >
                  Confirm Password
                </h1>
                <div
                  className="flex lg:w-80 w-64 border-2 p-2 rounded-lg border-gray-200 justify-between items-center"
                  style={
                    confirmPasswordValidity == ""
                      ? { border: "2px solid gray" }
                      : { border: "2px solid red" }
                  }
                >
                  {!confirmPasswordVisibility ? (
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-76 outline-none placeholder:text-xs lg:text-sm"
                      id="confirm-password"
                      onChange={(event) => {
                        setConfirmPasswordValidity("");
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Confirm your password"
                      className="w-76 outline-none placeholder:text-sm"
                      id="confirm-password"
                      onChange={(event) => {
                        setConfirmPasswordValidity("");
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  )}
                  <img
                    src="https://ik.imagekit.io/priyanshu61103/password-eye-icon.png"
                    alt=""
                    className="h-6 w-7"
                    onClick={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}
                  />
                </div>
                <p className="text-red-500">{confirmPasswordValidity}</p>
              </div>
            </div>
          </div>

          <button
            onClick={submitHandler}
            className="bg-black text-white font-semibold p-2 w-70 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
