import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileTab from "../components/ProfileTab";
import Host from "../components/Host";
import { useSelector } from "react-redux";
import { Layers } from "lucide-react";
import { toast } from "react-toastify";

const MyApplications = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const profileData = useSelector((state)=>state.profileData.value);
  const [tab, setTab] = useState(1);
  const [applicationsData,setApplicationsData] = useState([]);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const applicationsHandler = async() => {
      try{
         const response = await fetch(`${VITE_BACKEND_URL}/load-applications`,{
             "credentials":"include",
             "method":"POST",
             "body":JSON.stringify({
                appliedJobs:profileData.payload.appliedJobs,
                appliedInternships:profileData.payload.appliedInternships
             }),
             "headers":{
                "content-type":"application/json"
             }   
         });

         if(!response.ok){
            toast.error("Internal Server Error");
            return;
         }

         const data = await response.json();
         if(data.success){
            if(tab == 1)
            setApplicationsData(data.result);
            else if(tab == 2){
               
            }
            else{
             
            }
            return; 
         }
         toast.error("Applications Data Not Loaded");   
      }catch(error){
          console.log(error);
          toast.error("Internal Server Error");
      } 
  }
  useEffect(() => {
     applicationsHandler();
  }, [tab])
  

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
            onClick={() => setTab(1)}
            className={
              tab == 1
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            All Applications
          </button>
          <button
            onClick={() => setTab(2)}
            className={
              tab == 2
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            Jobs
          </button>
          <button
            onClick={() => setTab(3)}
            className={
              tab == 3
                ? "w-40 flex justify-center items-center p-3 text-md font-bold bg-blue-600 rounded-xl"
                : "w-40 flex justify-center items-center p-2 text-sm font-semibold border-2 border-blue-600 rounded-xl"
            }
          >
            Internships
          </button>
        </div>
        <div>
            {applicationsData.map((itr)=>(
                <div className="bg-blue-600">
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
