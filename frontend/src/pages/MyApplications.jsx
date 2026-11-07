import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileTab from "../components/ProfileTab";
import Host from "../components/Host";
import { useDispatch, useSelector } from "react-redux";
import { Layers } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setDetails } from "../utils/redux/slice/detailSlice/detailSlice";

const MyApplications = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const profileData = useSelector((state) => state.profileData.value);
  const [tab, setTab] = useState(1);
  const [totalApplicationsData, setTotalApplicationsData] = useState([]);
  const [jobsApplicationsData, setJobsApplicationsData] = useState([]);
  const [internshipsApplicationsData, setInternshipsApplicationsData] =
    useState([]);
  const [tabData, setTabData] = useState([]);
  const details = useSelector((state)=>state.details.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const user = localStorage.getItem("user");
  const saveDetails = (data) => {
      dispatch(setDetails(data));
      if(user == "candidate")
      navigate("/jobdetails");
      else
      navigate(`/application-details/${data._id}`);
    };
  const applicationsHandler = async () => {
    try {
      let applicationInfo;
      if(user == "candidate"){
         applicationInfo = {
          appliedJobs: profileData.payload.appliedJobs,
          appliedInternships: profileData.payload.appliedInternships,
          user
        };        
      }
      else{
        applicationInfo = {
          postedJobs: profileData.payload.postedJobs,
          postedInternships: profileData.payload.postedInternships,
          user
        }; 
      }
      const response = await fetch(`${VITE_BACKEND_URL}/load-applications`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(applicationInfo),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Internal Server Error");
        return;
      }

      const data = await response.json();
      if (data.success) {
        let arr = [];
        data.jobs.forEach((itr) => arr.push(itr));
        data.internships.forEach((itr) => arr.push(itr));
        setTotalApplicationsData(arr);
        setJobsApplicationsData(data.jobs);
        setInternshipsApplicationsData(data.internships);
        setTabData(arr);
        return;
      }
      toast.error("Applications Data Not Loaded");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };
  useEffect(() => {
    applicationsHandler();
  }, []);

  return (
    <div
      className="h-300 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      {profileTab && (
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "flex justify-end z-100 relative bottom-117 right-5"
                : "flex justify-end z-100 relative bottom-67 right-5"
              : button == "on"
                ? "flex justify-end z-100 relative bottom-57 right-5"
                : "flex justify-end z-100 relative bottom-7 right-5"
          }
        >
          <ProfileTab />
        </div>
      )}
      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? profileTab
                ? "relative bottom-195 opacity-25 z-10 p-10"
                : "relative bottom-110 z-10 opacity-25 p-10"
              : profileTab
                ? "relative bottom-145 opacity-25 z-10 p-10"
                : "relative bottom-60 z-10 opacity-25 p-10"
            : button == "on"
              ? profileTab
                ? "relative bottom-135 z-10 opacity-25 p-10"
                : "relative bottom-50 opacity-25 z-10 p-10"
              : profileTab
                ? "relative bottom-85 z-10 p-10"
                : "z-10 p-10"
        }
      >
        <div className="flex gap-x-5 justify-center items-center text-6xl font-bold text-blue-600">
          <Layers size={60} />
          <h1>My Applications</h1>
        </div>
        <h2 className="text-gray-200 text-lg font-semibold text-center mt-2 ml-15">
          Here are all the Jobs and Internships you applied in
        </h2>

        <div className="flex gap-x-10 my-10">
          <button
            onClick={() => {
              setTab(1);
              setTabData(totalApplicationsData);
            }}
            className={
              tab == 1
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            All Applications
          </button>
          <button
            onClick={() => {
              setTab(2);
              setTabData(jobsApplicationsData);
            }}
            className={
              tab == 2
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            Jobs
          </button>
          <button
            onClick={() => {
              setTab(3);
              setTabData(internshipsApplicationsData);
            }}
            className={
              tab == 3
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            Internships
          </button>
        </div>
        <div className="w-400 flex flex-wrap gap-5">
          {tabData.length > 0 ? (
            tabData.map((job, index) => (
              <div
                key={index}
                className="h-60 w-150 rounded-xl border-2 border-blue-500 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                {user== "candidiate" ? (
                <div className="h-7 w-32 border-2 border-gray-200 rounded-xl flex justify-center items-center gap-1 px-2">
                  <img
                    src="../target_icon.png"
                    alt=""
                    className="h-4 w-4 object-contain flex-shrink-0"
                  />
                  <h1 className="text-xs text-blue-400 whitespace-nowrap">
                    Actively Hiring
                  </h1>
                </div>):(
                <div className="h-7 w-32 border-2 border-gray-200 rounded-xl flex justify-center items-center gap-1 px-2">
                  <img
                    src="../target_icon.png"
                    alt=""
                    className="h-4 w-4 object-contain flex-shrink-0"
                  />
                  <h1 className="text-xs text-blue-400 whitespace-nowrap">
                    Recently Posted
                  </h1>
                </div>)}
                <div className="w-135 h-20 flex mt-1 flex-row justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-300 mt-4">
                      {job.title}
                    </h1>
                    <h2 className="text-sm text-gray-300 mt-1">
                      {job.company}
                    </h2>
                  </div>
                  <div className="h-fit w-30 relative bottom-5">
                    <img src={job.imageFile} alt="" className="object-cover" />
                  </div>
                </div>

                <div className="w-140 flex justify-center my-2">
                  <div className="h-0.5 w-140 bg-gray-200 rounded-xl opacity-20"></div>
                </div>
                <div className="w-135 h-20 flex mt-1 flex-row justify-between items-center">
                  <div>
                    <div className="flex gap-2 mt-5">
                      <img
                        src="../location_image.png"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-xs text-gray-300">{job.location}</p>
                    </div>

                    <div className="flex justify-between mt-2">
                      <div className="flex gap-2">
                        <img
                          src="../date_posted_icon.png"
                          alt=""
                          className="h-4 w-4"
                          style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                        />
                        <p className="text-xs text-gray-300">
                          Posted 1 week ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="h-8 w-30 bg-blue-500 text-black text-sm font-semibold rounded-xl"
                      onClick={() => saveDetails(job)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No Applications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
