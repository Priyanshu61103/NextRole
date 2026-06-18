import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBigRight, Edit2, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../Redux/Slice/profileDataSlice/profileDataSlice";

const EditProfile = () => {
  const profileData = useSelector((state) => state.profileData.value);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const [skillsArray, setSkillsArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [startingYear, setStartingYear] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [resume, setResume] = useState("");
  const [projects, setProjects] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [course, setCourse] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [achievements, setAchievements] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [summary, setSummary] = useState("");
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        setSkillsArray(data.result.skills);
        setFirstName(data.result.firstName);
        setLastName(data.result.lastName);
        setUser(data.result.user);
        setUserName(data.result.userName);
        setCollegeName(data.result.collegeName);
        setSpecialization(data.result.specialization);
        setCourse(data.result.course);
        setCgpa(data.result.cgpa);
        setProfilePhoto(data.result.profilePhoto);
        setCoverPhoto(data.result.coverPhoto);
        setAchievements(data.result.achievements);
        setEmail(data.result.email);
        setSummary(data.result.summary);
        setMobileNumber(data.result.mobileNumber);
        setWorkExperience(data.result.workExperience);
        setProjects(data.result.projects);
        setResume(data.result.resume);
        setYearOfGraduation(data.result.yearOfGraduation);
        setYearsOfExperience(data.result.yearsOfExperience);
        setStartingYear(data.result.startingYear);
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
      setSkillsArray(profileData.payload.skills);
      setFirstName(profileData.payload.firstName);
      setLastName(profileData.payload.lastName);
      setUser(profileData.payload.user);
      setUserName(profileData.payload.userName);
      setCollegeName(profileData.payload.collegeName);
      setSpecialization(profileData.payload.specialization);
      setCourse(profileData.payload.course);
      setCgpa(profileData.payload.cgpa);
      setProfilePhoto(profileData.payload.profilePhoto);
      setCoverPhoto(profileData.payload.coverPhoto);
      setAchievements(profileData.payload.achievements);
      setEmail(profileData.payload.email);
      setSummary(profileData.payload.summary);
      setMobileNumber(profileData.payload.mobileNumber);
      setWorkExperience(profileData.payload.workExperience);
      setProjects(profileData.payload.projects);
      setResume(profileData.payload.resume);
      setYearOfGraduation(profileData.payload.yearOfGraduation);
      setYearsOfExperience(profileData.payload.yearsOfExperience);
      setStartingYear(profileData.payload.startingYear);
    }
  }, []);
  return (
    <div
      className="h-fit w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={userName}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label htmlFor="user" className="font-semibold text-gray-400">
                    User
                  </label>
                  <input
                    type="text"
                    id="user"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={mobileNumber}
                    onChange={(event) => setMobileNumber(event.target.value)}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="collegeName"
                    className="font-semibold text-gray-400"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={collegeName}
                    onChange={(event) => setCollegeName(event.target.value)}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="course"
                    className="font-semibold text-gray-400"
                  >
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="specialization"
                    className="font-semibold text-gray-400"
                  >
                    Specialization
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={specialization}
                    onChange={(event) => setSpecialization(event.target.value)}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label htmlFor="cgpa" className="font-semibold text-gray-400">
                    Cgpa
                  </label>
                  <input
                    type="text"
                    id="cgpa"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={cgpa}
                    onChange={(event) => setCgpa(event.target.value)}
                  />
                </div>
                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="startingYear"
                    className="font-semibold text-gray-400"
                  >
                    Year of Commence
                  </label>
                  <input
                    type="text"
                    id="startingYear"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={startingYear}
                    onChange={(event) => setStartingYear(event.target.value)}
                  />
                </div>
                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="yearOfGraduation"
                    className="font-semibold text-gray-400"
                  >
                    Year of Graduation
                  </label>
                  <input
                    type="text"
                    id="yearOfGraduation"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={yearOfGraduation}
                    onChange={(event) =>
                      setYearOfGraduation(event.target.value)
                    }
                  />
                </div>
                <div className="h-10 w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="yearsOfExperience"
                    className="font-semibold text-gray-400"
                  >
                    Years Of Experience
                  </label>
                  <input
                    type="number"
                    min="0"
                    id="yearsOfExperience"
                    className="w-80 h-10 border-2 border-blue-500 rounded-lg p-2"
                    value={yearsOfExperience}
                    onChange={(event) =>
                      setYearsOfExperience(event.target.value)
                    }
                  />

                  <div className="w-80 flex gap-x-1 mt-5">
                    <div className="w-40 flex flex-wrap gap-2">
                      <p className="font-semibold text-gray-400">
                        Profile Photo
                      </p>
                      <label
                        htmlFor="profilePhoto"
                        className={
                          "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1"
                        }
                      >
                        Select File
                      </label>
                      <input
                        type="file"
                        id="profilePhoto"
                        className="hidden"
                        onChange={(event) => {
                          setResumeValidity(true);
                          setResume(event.target.files[0]);
                        }}
                      />
                    </div>

                    <div className="w-40 flex flex-wrap gap-2">
                      <p className="font-semibold text-gray-400">Cover Photo</p>
                      <label
                        htmlFor="coverPhoto"
                        className={
                          "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1"
                        }
                      >
                        Select File
                      </label>
                      <input
                        type="file"
                        id="coverPhoto"
                        className="hidden"
                        onChange={(event) => {
                          setResumeValidity(true);
                          setProfilePhoto(event.target.files[0]);
                        }}
                      />
                    </div>

                    <div className="w-40 flex flex-wrap gap-2">
                      <p className="font-semibold text-gray-400">Resume</p>
                      <label
                        htmlFor="resume"
                        className={
                          // resumeValidity
                          "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1"
                          //   : "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white font-semibold mt-1 border-2 border-red-500 cursor-pointer"
                        }
                      >
                        Select File
                      </label>
                      <input
                        type="file"
                        id="resume"
                        className="hidden"
                        onChange={(event) => {
                          setResumeValidity(true);
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
                    className="border-2 border-blue-500 rounded-lg p-2"
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)}
                  ></textarea>
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="skills"
                    className="font-semibold text-gray-400"
                  >
                    Skills
                  </label>
                  <div className="h-40 w-80 flex gap-1 flex-wrap rounded-xl border-2 border-blue-500 p-2">
                    {skillsArray.map((itr, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-x-1 bg-blue-400 text-black font-semibold text-xs rounded-full h-fit w-fit p-2 py-1"
                      >
                        {itr}
                        <div
                          onClick={(event) => {
                            event.preventDefault();
                            const arr = skillsArray.filter((it) => it != itr);
                            setSkillsArray(arr);
                          }}
                        >
                          <X size={12} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    id="skills"
                    className="h-10 w-80 border-2 border-blue-500 rounded-lg p-2"
                    value={skill}
                    onChange={(event) => setSkill(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key == "Enter" && skill.trim() != "") {
                        event.preventDefault();
                        setSkillsArray([...skillsArray, skill]);
                        setSkill("");
                      }
                    }}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="workExperience"
                    className="font-semibold text-gray-400"
                  >
                    Work Experience
                  </label>
                  <textarea
                    type="text"
                    id="workExperience"
                    rows="8"
                    cols="80"
                    className="border-2 border-blue-500 rounded-lg p-2"
                    value={workExperience}
                    onChange={(event) => setWorkExperience(event.target.value)}
                  ></textarea>
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="projects"
                    className="font-semibold text-gray-400"
                  >
                    Projects
                  </label>
                  <textarea
                    type="text"
                    id="projects"
                    rows="8"
                    cols="80"
                    className="border-2 border-blue-500 rounded-lg p-2"
                    value={projects}
                    onChange={(event) => setProjects(event.target.value)}
                  ></textarea>
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label
                    htmlFor="achievements"
                    className="font-semibold text-gray-400"
                  >
                    Achievements
                  </label>
                  <textarea
                    type="text"
                    id="achievements"
                    rows="8"
                    cols="80"
                    className="border-2 border-blue-500 rounded-lg p-2"
                    value={achievements}
                    onChange={(event) => setAchievements(event.target.value)}
                  ></textarea>
                </div>

                <div className="w-160 flex flex-col flex-wrap gap-2 justify-end items-end">
                  <button className="h-10 w-40 flex justify-center gap-x-4 items-center font-semibold text-white bg-blue-600 rounded-full p-2">
                    <Edit2 />
                    Edit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default EditProfile;
