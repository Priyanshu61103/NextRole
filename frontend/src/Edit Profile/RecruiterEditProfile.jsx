import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBigRight, Edit2, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../Redux/Slice/profileDataSlice/profileDataSlice";
import ProfileTab from "../ProfileTab/ProfileTab";
import Host from "../Host/Host";


const RecruiterEditProfile = () => {
  const profileData = useSelector((state) => state.profileData.value);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const profileTab = useSelector((state) => state.profileTab.value);
  const button = useSelector((state) => state.button.value);
  const [targetRolesArray, setTargetRolesArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, SetCompanyLocation] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(undefined);
  const [coverPhoto, setCoverPhoto] = useState(undefined);
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [summary, setSummary] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [targetRolesArrayValidity, setTargetRolesArrayValidity] = useState(true);
  const [firstNameValidity, setFirstNameValidity] = useState(true);
  const [lastNameValidity, setLastNameValidity] = useState(true);
  const [resumeValidity, setResumeValidity] = useState(true);
  const [companyNameValidity, setCompanyNameValidity] = useState(true);
  const [companyLocationValidity, SetCompanyLocationValidity] = useState(true);
  const [companyWebsiteValidity, setCompanyWebsiteValidity] = useState(true);
  const [mobileNumberValidity, setMobileNumberValidity] = useState(true);
  const [summaryValidity, setSummaryValidity] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkValidity = () => {
    if (firstName.trim() == "") {
      setFirstNameValidity(false);
      return false;
    }
    if (lastName.trim() == "") {
      setLastNameValidity(false);
      return false;
    }
    if (companyName.trim() == "") {
      setCompanyNameValidity(false);
      return false;
    }
    if (companyLocation.trim() == "") {
      SetCompanyLocationValidity(false);
      return false;
    }
    if (summary.trim() == "") {
      setSummaryValidity(false);
      return false;
    }
    if (companyWebsite.trim() == "") {
      setCompanyWebsiteValidity(false);
      return false;
    }
    if (targetRolesArray.length == 0) {
      setTargetRolesArrayValidity(false);
      return false;
    }
    if (mobileNumber.trim() == "") {
      setMobileNumberValidity(false);
      return false;
    }

    return true;
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (!checkValidity()) {
        alert("Please Fill Details Correctly");
        return;
      }
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("user", user);
      formData.append("userName", userName);
      formData.append("mobileNumber", mobileNumber);
      formData.append("summary", summary);
      formData.append("profilePhoto", profilePhoto);
      formData.append("coverPhoto", coverPhoto);
      formData.append("companyName", companyName);
      formData.append("companyLocation", companyLocation);
      formData.append("targetRoles", targetRolesArray);
      formData.append("companyWebsite", companyWebsite);
      console.log(Object.fromEntries(formData));

      const response = await fetch(
        "http://localhost:3200/update-profile-data",
        {
          method: "PUT",
          body: formData,
          credentials: "include",
        },
      );

      const data = await response.json();

      if (data.success) {
        alert("Profile Data Edited Successfully");
        dispatch(setProfileData(data.result));
        navigate("/recruiter-profile");
        return;
      }
      alert("Profile Data Not Edited");
      return;
    } catch (error) {
      alert(error);
      console.log(error);
      return;
    }
  };
  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3200/fetch-user-data", {
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
      if (!response) return;
      if (data.success) {
        dispatch(setProfileData(data.result));
        setTargetRolesArray(data.result.targetRoles);
        setFirstName(data.result.firstName);
        setLastName(data.result.lastName);
        setUser(data.result.user);
        setUserName(data.result.userName);
        setCompanyName(data.result.companyName);
        setCompanyLocation(data.result.companyLocation);
        setCompanyWebsite(data.result.companyWebsite);
        setProfilePhoto(data.result.profilePhoto);
        setCoverPhoto(data.result.coverPhoto);
        setEmail(data.result.email);
        setSummary(data.result.summary);
        setMobileNumber(data.result.mobileNumber);
        console.log("Running...");
        return;
      }
      alert("UserData Not Loaded");
      return;
    } catch (error) {
      console.log(error);
      alert("Error Catched");
    }
  };

  useEffect(() => {
    if (!profileData || !profileData.payload) fetchUserData();
    else {
      setTargetRolesArray(profileData.payload.targetRoles);
      setFirstName(profileData.payload.firstName);
      setLastName(profileData.payload.lastName);
      setUser(profileData.payload.user);
      setUserName(profileData.payload.userName);
      setCompanyName(profileData.payload.companyName);
      SetCompanyLocation(profileData.payload.companyLocation);
      setCompanyWebsite(profileData.payload.companyWebsite);
      setProfilePhoto(profileData.payload.profilePhoto);
      setCoverPhoto(profileData.payload.coverPhoto);
      setEmail(profileData.payload.email);
      setSummary(profileData.payload.summary);
      setMobileNumber(profileData.payload.mobileNumber);
    }
  }, []);
  return (
    <div
      className={
        !profileTab ? "h-fit w-full text-white" : "h-fit w-full text-white"
      }
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? "relative bottom-110 opacity-25 z-10"
              : "relative bottom-60 opacity-25 z-10"
            : button == "on"
              ? "relative bottom-50 z-10 opacity-25"
              : "opacity-100 z-10"
        }
      >
        <div className="flex justify-center">
          <div className="w-250 h-fit border-2 border-blue-600 rounded-2xl p-10">
            <div>
              <h1 className="text-3xl font-bold text-blue-600 text-center">
                Edit Profile
              </h1>
              <h2 className="text-xs lg:text-sm text-gray-400 text-center mb-10">
                Please Edit Your Profile Details and get Ahead with NextRole
              </h2>
            </div>
            {profileData && profileData.payload && (
              <div>
                <form
                  action=""
                  className="flex flex-wrap gap-x-28 gap-y-8 justify-center"
                  encType="multipart/form-data"
                >
                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="firstName"
                      className="font-semibold text-gray-400"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={
                        firstNameValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={firstName}
                      onChange={(event) => {
                        setFirstNameValidity(true);
                        setFirstName(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="lastName"
                      className="font-semibold text-gray-400"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className={
                        lastNameValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={lastName}
                      onChange={(event) => {
                        setLastNameValidity(true);
                        setLastName(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="emailId"
                      className="font-semibold text-gray-400"
                    >
                      Email Id
                    </label>
                    <input
                      type="email"
                      id="emailId"
                      className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none opacity-50"
                      value={email}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="username"
                      className="font-semibold text-gray-400"
                    >
                      Username
                    </label>
                    <input
                      type="username"
                      id="mobile"
                      value={userName}
                      className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none opacity-50"
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="user"
                      className="font-semibold text-gray-400"
                    >
                      User
                    </label>
                    <input
                      type="text"
                      id="user"
                      className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none opacity-50"
                      value={user}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="mobile"
                      className="font-semibold text-gray-400"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      className={
                        mobileNumberValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={mobileNumber}
                      onChange={(event) => {
                        setMobileNumberValidity(true);
                        setMobileNumber(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="companyName"
                      className="font-semibold text-gray-400"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className={
                        companyNameValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={companyName}
                      onChange={(event) => {
                        setCompanyNameValidity(true);
                        setCompanyName(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="companyWebsite"
                      className="font-semibold text-gray-400"
                    >
                      Company Website
                    </label>
                    <input
                      type="text"
                      id="companyWebsite"
                      className={
                        companyWebsiteValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={companyWebsite}
                      onChange={(event) => {
                        setCompanyWebsiteValidity(true);
                        setCompanyWebsite(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="companyLocation"
                      className="font-semibold text-gray-400"
                    >
                      Company Location
                    </label>
                    <input
                      type="text"
                      id="companyLocation"
                      className={
                        companyLocationValidity
                          ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={companyLocation}
                      onChange={(event) => {
                        SetCompanyLocationValidity(true);
                        SetCompanyLocation(event.target.value);
                      }}
                    />
                  </div>

                  
               
                  <div className="h-10 w-80 flex flex-wrap gap-2">
                    <div className="w-80 flex gap-x-1 mt-5">
                      <div className="w-40 flex flex-wrap gap-2">
                        <p className="font-semibold text-gray-400">
                          Profile Photo
                        </p>
                        <label
                          htmlFor="profilePhoto"
                          className={
                            "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1 outline-none"
                          }
                        >
                          Select File
                        </label>
                        <input
                          type="file"
                          id="profilePhoto"
                          className="hidden"
                          onChange={(event) => {
                            setProfilePhoto(event.target.files[0]);
                          }}
                        />
                      </div>

                      <div className="w-40 flex flex-wrap gap-2">
                        <p className="font-semibold text-gray-400">
                          Cover Photo
                        </p>
                        <label
                          htmlFor="coverPhoto"
                          className={
                            "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1 outline-none"
                          }
                        >
                          Select File
                        </label>
                        <input
                          type="file"
                          id="coverPhoto"
                          className="hidden"
                          onChange={(event) => {
                            setCoverPhoto(event.target.files[0]);
                          }}
                        />
                      </div>
                    </div>

                  </div>
                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="summary"
                      className="font-semibold text-gray-400"
                    >
                      Summary
                    </label>
                    <textarea
                      type="text"
                      id="summary"
                      rows="8"
                      cols="80"
                      className={
                        summaryValidity
                          ? "border-2 border-blue-500 outline-none rounded-lg p-2"
                          : "w-80 border-2 border-red-500 outline-none rounded-lg p-2"
                      }
                      value={summary}
                      onChange={(event) => {
                        setSummaryValidity(true);
                        setSummary(event.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="w-80 flex flex-wrap gap-2">
                    <label
                      htmlFor="targetRoles"
                      className="font-semibold text-gray-400"
                    >
                      Target Roles
                    </label>
                    <div className="h-40 w-80 flex gap-1 flex-wrap rounded-xl border-2 border-blue-500 p-2 outline-none">
                      {targetRolesArray.map((itr, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center gap-x-1 outline-none bg-blue-400 text-black font-semibold text-xs rounded-full h-fit w-fit p-2 py-1"
                        >
                          {itr}
                          <div
                            onClick={(event) => {
                              event.preventDefault();
                              setTargetRolesArrayValidity(true);
                              const arr = targetRolesArray.filter((it) => it != itr);
                              setTargetRolesArray(arr);
                            }}
                          >
                            <X size={12} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      id="targetRoles"
                      className={
                        targetRolesArrayValidity
                          ? "h-10 w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                          : "h-10 w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                      }
                      value={targetRole}
                      onChange={(event) => setTargetRole(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key == "Enter" && targetRole.trim() != "") {
                          event.preventDefault();
                          setTargetRolesArray([...targetRolesArray, targetRole]);
                          setTargetRole("");
                        }
                      }}
                    />
                  </div>

                  <div className="w-160 flex flex-col flex-wrap gap-2 justify-end items-end">
                    <button
                      onClick={submitHandler}
                      className="h-10 w-40 flex justify-center outline-none gap-x-4 items-center font-semibold text-white bg-blue-600 rounded-full p-2"
                    >
                      <Edit2 />
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      {profileTab && (
        <div
          className={
            hostSwitch == "on"?
            button == "on"
              ? "flex justify-end z-100 relative bottom-375 right-5"
              : "flex justify-end z-100 relative bottom-325 right-5"
            :
            button == "on"
              ? "flex justify-end z-100 relative bottom-315 right-5"
              : "flex justify-end z-100 relative bottom-265 right-5"  
          }
        >
          <ProfileTab />
        </div>
      )}
      <div className={profileTab ? "relative bottom-80" : "relative bottom-0"}>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default RecruiterEditProfile;
