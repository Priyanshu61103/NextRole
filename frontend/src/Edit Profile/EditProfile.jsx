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
  const [resume, setResume] = useState(undefined);
  const [projects, setProjects] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [collegeName, setCollegeName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [course, setCourse] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(undefined);
  const [coverPhoto, setCoverPhoto] = useState(undefined);
  const [mobileNumber, setMobileNumber] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [summary, setSummary] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsArrayValidity, setSkillsArrayValidity] = useState(true);
  const [firstNameValidity, setFirstNameValidity] = useState(true);
  const [lastNameValidity, setLastNameValidity] = useState(true);
  const [yearsOfExperienceValidity, setYearsOfExperienceValidity] =
    useState(true);
  const [startingYearValidity, setStartingYearValidity] = useState(true);
  const [yearOfGraduationValidity, setYearOfGraduationValidity] =
    useState(true);
  const [resumeValidity, setResumeValidity] = useState(true);
  const [collegeNameValidity, setCollegeNameValidity] = useState(true);
  const [specializationValidity, setSpecializationValidity] = useState(true);
  const [courseValidity, setCourseValidity] = useState(true);
  const [mobileNumberValidity, setMobileNumberValidity] = useState(true);
  const [cgpaValidity, setCgpaValidity] = useState(true);
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
    if (cgpa.trim() == "") {
      setCgpaValidity(false);
      return false;
    }
    if (collegeName.trim() == "") {
      setCollegeNameValidity(false);
      return false;
    }
    if (specialization.trim() == "") {
      setSpecializationValidity(false);
      return false;
    }
    if (startingYear.trim() == "") {
      setStartingYearValidity(false);
      return false;
    }
    if (yearOfGraduation.trim() == "") {
      setYearOfGraduationValidity(false);
      return false;
    }
    if (yearsOfExperience.trim() == "") {
      setYearsOfExperienceValidity(false);
      return false;
    }
    if (summary.trim() == "") {
      setSummaryValidity(false);
      return false;
    }
    if (course.trim() == "") {
      setCourseValidity(false);
      return false;
    }
    if (skillsArray.length == 0) {
      setSkillsArrayValidity(false);
      return false;
    }
    if (resume == undefined) {
      setResumeValidity(false);
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
      formData.append("resume", resume);
      formData.append("mobileNumber", mobileNumber);
      formData.append("summary", summary);
      formData.append("workExperience", workExperience);
      formData.append("projects", projects);
      formData.append("achievements", achievements);
      formData.append("profilePhoto", profilePhoto);
      formData.append("coverPhoto", coverPhoto);
      formData.append("collegeName", collegeName);
      formData.append("specialization", specialization);
      formData.append("startingYear", startingYear);
      formData.append("yearOfGraduation", yearOfGraduation);
      formData.append("yearsOfExperience", yearsOfExperience);
      formData.append("skills", skillsArray);
      formData.append("cgpa", cgpa);
      formData.append("course", course);
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
        navigate("/profile");
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label htmlFor="user" className="font-semibold text-gray-400">
                    User
                  </label>
                  <input
                    type="text"
                    id="user"
                    className="w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
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
                    htmlFor="collegeName"
                    className="font-semibold text-gray-400"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    className={
                      collegeNameValidity
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={collegeName}
                    onChange={(event) => {
                      setCollegeNameValidity(true);
                      setCollegeName(event.target.value);
                    }}
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
                    className={
                      courseValidity
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={course}
                    onChange={(event) => {
                      setCourseValidity(true);
                      setCourse(event.target.value);
                    }}
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
                    className={
                      specializationValidity
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={specialization}
                    onChange={(event) => {
                      setSpecializationValidity(true);
                      setSpecialization(event.target.value);
                    }}
                  />
                </div>

                <div className="w-80 flex flex-wrap gap-2">
                  <label htmlFor="cgpa" className="font-semibold text-gray-400">
                    Cgpa
                  </label>
                  <input
                    type="text"
                    id="cgpa"
                    className={
                      cgpaValidity
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={cgpa}
                    onChange={(event) => {
                      setCgpaValidity(true);
                      setCgpa(event.target.value);
                    }}
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
                    className={
                      startingYearValidity
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={startingYear}
                    onChange={(event) => {
                      setStartingYearValidity(true);
                      setStartingYear(event.target.value);
                    }}
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
                    className={
                      yearOfGraduation
                        ? "w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={yearOfGraduation}
                    onChange={(event) => {
                      setYearOfGraduationValidity(true);
                      setYearOfGraduation(event.target.value);
                    }}
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
                    className={
                      yearsOfExperience
                        ? "w-80 h-10 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
                    value={yearsOfExperience}
                    onChange={(event) => {
                      setFirstNameValidity(true);
                      setYearsOfExperience(event.target.value);
                    }}
                  />

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
                      <p className="font-semibold text-gray-400">Cover Photo</p>
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

                    <div className="w-40 flex flex-wrap gap-2">
                      <p className="font-semibold text-gray-400">Resume</p>
                      <label
                        htmlFor="resume"
                        className={
                          resumeValidity
                            ? "flex justify-center items-center bg-blue-500 rounded-xl  outline-none h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer relative right-1"
                            : "flex justify-center items-center bg-blue-500 rounded-xl outline-none  h-10 w-30 p-2 text-white font-semibold mt-1 border-2 border-red-500 cursor-pointer"
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
                          setResume(event.target.files[0]);
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
                    htmlFor="skills"
                    className="font-semibold text-gray-400"
                  >
                    Skills
                  </label>
                  <div className="h-40 w-80 flex gap-1 flex-wrap rounded-xl border-2 border-blue-500 p-2 outline-none">
                    {skillsArray.map((itr, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-x-1 outline-none bg-blue-400 text-black font-semibold text-xs rounded-full h-fit w-fit p-2 py-1"
                      >
                        {itr}
                        <div
                          onClick={(event) => {
                            event.preventDefault();
                            setSkillsArrayValidity(true);
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
                    className={
                      skillsArrayValidity
                        ? "h-10 w-80 border-2 border-blue-500 rounded-lg p-2 outline-none"
                        : "h-10 w-80 border-2 border-red-500 rounded-lg p-2 outline-none"
                    }
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
                    className="border-2 border-blue-500 rounded-lg p-2 outline-none"
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
                    className="border-2 border-blue-500 rounded-lg p-2 outline-none"
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
                    className="border-2 border-blue-500 rounded-lg p-2 outline-none"
                    value={achievements}
                    onChange={(event) => setAchievements(event.target.value)}
                  ></textarea>
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
      <Testimonials />
      <Footer />
    </div>
  );
};

export default EditProfile;
