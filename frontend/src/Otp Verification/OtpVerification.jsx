import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { signUpData } = location.state;
  const submitHandler = async () => {
    try {
      const response = await fetch("http://localhost:3200/otp-verification", {
        method: "POST",
        body: JSON.stringify(signUpData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response) {
        alert("Error");
        return;
      }

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        navigate("/profile-details", { state: { signUpData } });
        return;
      }
      alert(data.message);
    } catch (error) {
      console.log("Error Catched: ", error);
      alert("Internal Server Error");
    }
  };
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[url(../job.png)] bg-cover">
      <div className="h-60 w-100 bg-white rounded-2xl p-4">
        <div className="text-center">
          <h1 className="font-bold text-md lg:text-lg">Otp Verification</h1>
          <p className="text-xs lg:text-sm text-gray-600">
            Please give otp sent on your email address
          </p>
          <div className="my-8 ml-12">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                height: "40px",
                width: "40px",
                border: "2px solid black",
                borderRadius: "20%",
              }}
            />
          </div>
          <button
            onClick={submitHandler}
            className="bg-black text-white font-semibold p-2 w-70 rounded-2xl"
          >
            Submit Otp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
