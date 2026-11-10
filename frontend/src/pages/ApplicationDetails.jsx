import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Jobs from "./Jobs";
import {
  ArrowBigRight,
  DollarSign,
  History,
  IndianRupee,
  Layers,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ApplicationDetails = () => {
  const details = useSelector((state) => state.details.value);
  const navigate = useNavigate();
  const [applicantsData, setApplicantsData] = useState([]);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const applicationsHandler = async () => {
    try {
      const response = await fetch(
        `${VITE_BACKEND_URL}/load-applicants/${details.payload._id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        },
      );

      const data = await response.json();
      if (data.success) {
        console.log(data.result);
        setApplicantsData(data.result);
        return;
      }
      toast.error("Internal Server Error");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    applicationsHandler();
  }, []);

  return (
    <div className="h-fit min-h-screen w-screen  bg-[rgb(25,25,25)]">
      <Navbar />
      <div className="flex flex-col justify-around gap-10">
        <div className="mx-10 p-4 py-8 h-80 border-2 border-blue-600 rounded-2xl flex justify-around items-center">
          <div>
            <h1 className="text-5xl text-white font-bold">
              {details.payload.title}
            </h1>
            <h3 className="text-3xl text-white my-4">
              {details.payload.company}
            </h3>
            <div className="flex gap-x-10">
              <div className="border-2 border-blue-600 rounded-full w-fit p-2 flex mt-5 justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-8 w-fit" />
                <p className="text-sm text-gray-300 font-bold mt-1">
                  {details.payload.numberOfOpenings} Openings Available
                </p>
              </div>
              <div className="border-2 border-blue-600 rounded-full w-fit p-2 flex gap-x-2 mt-5 justify-center items-center">
                <History className="text-blue-600" />
                <p className="text-sm text-gray-300 font-bold mt-1">
                  Atleast {details.payload.experience} Years Tech Experience
                  Required
                </p>
              </div>
              <div className="border-2 border-blue-600 rounded-full w-fit p-2 flex  mt-5 justify-center items-center">
                <IndianRupee className="text-blue-600" />
                <p className="text-sm text-gray-300 font-bold mt-1">
                  {details.payload.ctc} CTC
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/jobdetails")}
              className="p-4 rounded-2xl bg-blue-600 font-bold flex gap-x-1 mt-5"
            >
              More Details
              <ArrowBigRight />
            </button>
          </div>
          <div>
            <img
              src={details.payload.imageFile}
              alt=""
              className="h-60 w-60 rounded-full border-4 border-blue-600"
            />
          </div>
        </div>
        <div className="h-fit mx-10 rounded-2xl p-5">
          <div>
            <div className="flex gap-x-2 items-center text-4xl font-bold text-gray-300">
              <Layers size={50} />
              <h1>Applications</h1>
            </div>
            <h2 className="text-gray-200 text-md font-semibold">
              Here are all the candidates who applied in this job
            </h2>
          </div>
          <div className="flex flex-col justify-around gap-5 mt-5">
            {applicantsData.length &&
              applicantsData.map((data) => (
                <div className="border-2 border-blue-600 rounded-2xl h-fit w-full p-4">
                  <h1 className="text-3xl font-bold text-gray-200">
                    {data.firstName} {data.lastName}
                  </h1>
                  <h2 className="text-sm text-gray-200 mt-2">
                    Email ID : {data.email}
                  </h2>
                  <h2 className="text-sm text-gray-200 mt-2">
                    Phone Number : {data.mobileNumber}
                  </h2>
                  <h2 className="text-sm text-gray-200 mt-2">
                    Ready to join : {data.join}
                  </h2>
                  <div className="my-2 text-sm">
                    <h1 className={"text-gray-300"}>Resume</h1>
                    <a href={data.resume}>
                      <button className="flex text-gray-200 text-xs justify-center items-center gap-x-2 border-2 border-blue-600 rounded-2xl p-2 mt-1">
                        <button className="border-2 border-gray-300 rounded-lg">
                          <img
                            src="../pdfIcon.png"
                            alt=""
                            className="h-7 w-7"
                          />
                        </button>
                        {data.firstName} {data.lastName} Resume
                      </button>
                    </a>
                  </div>
                  <div
                    className={
                      data.atsScore >= 80
                        ? "text-green-700 text-xs flex gap-x-2 items-center"
                        : data.atsScore >= 50
                          ? "text-amber-200 text-xs flex gap-x-2 items-center"
                          : "text-red-500 text-xs flex gap-x-2 items-center"
                    }
                  >
                    <div
                      className={
                        data.atsScore >= 80
                          ? "h-2 w-2 rounded-full bg-green-700"
                          : data.atsScore >= 50
                            ? "h-2 w-2 rounded-full bg-amber-200"
                            : "h-2 w-2 rounded-full bg-red-700"
                      }
                    ></div>
                    Resume Has an Ats Score of {data.atsScore}
                  </div>
                  <div className="border-2 border-blue-600 rounded-full w-fit text-blue-600 text-xs mt-4 mb-2 p-2">
                    Q: Why you should hire me ?
                  </div>
                  <div className="w-200 text-gray-200 text-xs mb-2">{data.hire}</div>
                  <Link to="/candidate-profile" state={{id:data.applicantId}}><button className="w-40 p-2 bg-blue-600 rounded-2xl mt-3 text-md text-white font-semibold">View Profile</button></Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
