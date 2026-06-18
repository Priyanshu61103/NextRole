import { ArrowBigRight, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Profiledetails = () => {
  const location = useLocation();
  const { signUpData } = location.state;
  const [user, setUser] = useState(signUpData.user);
  const [profilePage, setProfilePage] = useState(1);
  const [skill, setSkill] = useState("");
  const [skillsArray, setSkillsArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [summary, setSummary] = useState("");
  const [resume, setResume] = useState(undefined);
  const [collegeName, setCollegeName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [firstNameValidity, setFirstNameValidity] = useState(true);
  const [lastNameValidity, setLastNameValidity] = useState(true);
  const [mobileNumberValidity, setMobileNumberValidity] = useState(true);
  const [yearsOfExperienceValidity, setYearsOfExperienceValidity] =
    useState(true);
  const [yearOfGraduationValidity, setYearOfGraduationValidity] =
    useState(true);
  const [summaryValidity, setSummaryValidity] = useState(true);
  const [resumeValidity, setResumeValidity] = useState(true);
  const [collegeNameValidity, setCollegeNameValidity] = useState(true);
  const [specializationValidity, setSpecializationValidity] = useState(true);
  const [skillsArrayValidity, setSkillsArrayValidity] = useState(true);
  const [skillsArrayMessage, setSkillsArrayMessage] = useState(false);
  const [cgpaValidity, setCgpaValidity] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyNameValidity, setCompanyNameValidity] = useState(true);
  const [designationValidity, setDesignationValidity] = useState(true);
  const [companyLocationValidity, setCompanyLocationValidity] = useState(true);
  const [companyWebsiteValidity, setCompanyWebsiteValidity] = useState(true);
  const [targetRole, setTargetRole] = useState("");
  const [targetRolesArray, setTargetRolesArray] = useState([]);
  const [targetRolesArrayValidity, setTargetRolesArrayValidity] =
    useState(true);
  const [targetRolesArrayMessage, setTargetRolesArrayMessage] = useState(false);
  const navigate = useNavigate();
  const profilePageHandler = (event) => {
    event.preventDefault();
    if (firstName == "") {
      setFirstNameValidity(false);
      return;
    }
    if (lastName == "") {
      setLastNameValidity(false);
      return;
    }
    if (mobileNumber == "") {
      setMobileNumberValidity(false);
      return;
    }
    if (user == "student") {
      if (!resume) {
        setResumeValidity(false);
        return;
      }
      if (collegeName == "") {
        setCollegeNameValidity(false);
        return;
      }
      if (specialization == "") {
        setSpecializationValidity(false);
        return;
      }
      if (yearOfGraduation == "") {
        setYearOfGraduationValidity(false);
        return;
      }
      if (yearsOfExperience == "") {
        setYearsOfExperienceValidity(false);
        return;
      }
    } else if (user == "recruiter") {
      if (!designation) {
        setDesignationValidity(false);
        return;
      }
      if (companyName == "") {
        setCompanyNameValidity(false);
        return;
      }
      if (companyLocation == "") {
        setCompanyLocationValidity(false);
        return;
      }
    }
    setProfilePage(2);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (user == "student") {
        if (summary == "") {
          setSummaryValidity(false);
          return;
        }
        if (skillsArray.length == 0) {
          setSkillsArrayValidity(false);
          return;
        }
      } else if (user == "recruiter") {
        if (companyWebsite == "") {
          setCompanyWebsite(false);
          return;
        }
        if (targetRolesArray.length == 0) {
          setTargetRolesArrayValidity(false);
          return;
        }
      }
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("mobileNumber", mobileNumber);
      if (user == "student") {
        formData.append("yearsOfExperience", yearsOfExperience);
        formData.append("yearOfGraduation", yearOfGraduation);
        formData.append("summary", summary);
        formData.append("collegeName", collegeName);
        formData.append("specialization", specialization);
        formData.append("resumeFile", resume);
        formData.append("skills", skillsArray);
        formData.append("email", signUpData.email);
        formData.append("password", signUpData.password);
        formData.append("user", signUpData.user);
        formData.append("cgpa", cgpa);
      } else if (user == "recruiter") {
        formData.append("designation", designation);
        formData.append("companyName", companyName);
        formData.append("companyWebsite", companyWebsite);
        formData.append("companyLocation", companyLocation);
        formData.append("targetRoles", targetRolesArray);
        formData.append("email", signUpData.email);
        formData.append("password", signUpData.password);
        formData.append("user", signUpData.user);
      }

      const response = await fetch(
        "http://localhost:3200/save-profile-details",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response) {
        alert("Error...");
        return;
      }

      const data = await response.json();
      if (data.success) {
        console.log(data.token);
        console.log(data.payload);
        alert(`Welcome ${firstName} ${lastName} on NextRole , Login to enter the world of Crafting Careers.`);
        document.cookie = `token=,${data.token}`;
        localStorage.setItem("userName", data.payload.userName);
        localStorage.setItem("user", data.payload.user);
        navigate("/");
        return;
      }
      alert("Sorry! Account Not Created");
    } catch (error) {
      console.log(error);
      alert("Internal Server Error");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url(../profile-page.png)] bg-cover">
      <div className="h-150 w-220 bg-white rounded-2xl flex">
        <div
          className="h-150 w-100 rounded-bl-2xl"
          style={{ backgroundColor: "rgb(25,25,25)" }}
        >
          <div className="h-128 w-100 bg-blue-500 rounded-tl-2xl border-b-8 z-10 border-gray-200">
            <img
              src="../students_signup_image.png"
              alt=""
              className="h-110 w-100 object-contain relative top-28 z-0"
            />
          </div>
          <div>
            <img
              src="../logo_darkmode.png"
              alt=""
              className="h-50 relative bottom-14"
            />
          </div>
        </div>
        <div className="w-120 flex justify-center p-4">
          <div>
            <h1 className="text-3xl font-bold text-center">Profile Details</h1>
            <h2 className="text-xs lg:text-sm text-gray-500 text-center">
              Please Fill Your Profile Details and get Started with NextRole
            </h2>
            {user == "student" && (
              <div>
                <form
                  action=""
                  className={
                    profilePage == 1 ? "flex flex-wrap gap-8 mt-2" : "hidden"
                  }
                  encType="multipart/form-data"
                >
                  <div className="w-40">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      value={firstName}
                      className={
                        firstNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setFirstNameValidity(true);
                        setFirstName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-40">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      value={lastName}
                      className={
                        lastNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setLastNameValidity(true);
                        setLastName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-30">
                    <label htmlFor="mobile-number">Mobile</label>
                    <input
                      type="text"
                      id="mobile-number"
                      value={mobileNumber}
                      className={
                        mobileNumberValidity
                          ? "border-2 border-black rounded-lg h-10 w-30 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-30 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setMobileNumberValidity(true);
                        setMobileNumber(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-30">
                    <p className="ml-1">Resume</p>
                    <label
                      htmlFor="resume"
                      className={
                        resumeValidity
                          ? "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white border-2 border-black font-semibold mt-1 cursor-pointer"
                          : "flex justify-center items-center bg-blue-500 rounded-xl h-10 w-30 p-2 text-white font-semibold mt-1 border-2 border-red-500 cursor-pointer"
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
                  <div className="w-30">
                    <label htmlFor="cgpa">Cgpa</label>
                    <input
                      type="text"
                      id="cgpa"
                      value={cgpa}
                      className={
                        cgpaValidity
                          ? "border-2 border-black rounded-lg h-10 w-30 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-30 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setCgpaValidity(true);
                        setCgpa(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-80">
                    <label htmlFor="college-name">College Name</label>
                    <input
                      type="text"
                      id="college-name"
                      className={
                        collegeNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      value={collegeName}
                      onChange={(event) => {
                        setCollegeNameValidity(true);
                        setCollegeName(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                      type="text"
                      id="specialization"
                      value={specialization}
                      className={
                        specializationValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setSpecializationValidity(true);
                        setSpecialization(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-35">
                    <label htmlFor="year-of-graduation">
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      id="year-of-graduation"
                      value={yearOfGraduation}
                      className={
                        yearOfGraduationValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setYearOfGraduationValidity(true);
                        setYearOfGraduation(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-35">
                    <label htmlFor="years-of-experience">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      min="0"
                      id="years-of-experience"
                      value={yearsOfExperience}
                      onChange={(event) => {
                        setYearsOfExperienceValidity(true);
                        setYearsOfExperience(event.target.value);
                      }}
                      className={
                        yearsOfExperienceValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                    />
                  </div>
                  <div className="w-100 flex justify-end relative bottom-6 left-8">
                    <button
                      onClick={profilePageHandler}
                      className="flex gap-x-2 justify-center items-center h-10 w-30 bg-blue-600 p-2 rounded-xl text-white font-bold"
                    >
                      Next
                      <ArrowBigRight color={"white"} />
                    </button>
                  </div>
                </form>

                <form
                  action=""
                  className={
                    profilePage == 2 ? "flex flex-wrap gap-8 mt-4" : "hidden"
                  }
                >
                  <div className="w-80">
                    <label htmlFor="summary">Summary</label>
                    <textarea
                      type="text"
                      id="summary"
                      rows="3"
                      cols="42"
                      value={summary}
                      onChange={(event) => {
                        setSummaryValidity(true);
                        setSummary(event.target.value);
                      }}
                      className={
                        summaryValidity
                          ? "border-2 border-black rounded-lg p-4 mt-2"
                          : "border-2 border-red-500 rounded-lg p-4 mt-2"
                      }
                    ></textarea>
                  </div>
                  <div className="w-90">
                    <label htmlFor="skills">Skills</label>
                    <div className="h-55">
                      <div className="flex flex-wrap gap-x-2">
                        {skillsArray.length > 0 &&
                          skillsArray.map((itr) => (
                            <div className="h-10">
                              <button className="h-fit w-fit p-2 bg-blue-300 text-xs rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                  {itr}
                                  <X
                                    size={14}
                                    onClick={(event) => {
                                      event.preventDefault();
                                      const arr = skillsArray.filter(
                                        (it) => it != itr,
                                      );
                                      setSkillsArray(arr);
                                    }}
                                  />
                                </div>
                              </button>
                            </div>
                          ))}
                      </div>
                      <input
                        type="text"
                        id="skills"
                        className={
                          skillsArrayValidity
                            ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                            : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                        }
                        onChange={(event) => {
                          setSkillsArrayValidity(true);
                          setSkill(event.target.value);
                        }}
                        value={skill}
                        onKeyDown={(event) => {
                          if (event.key == "Enter" && skill.trim() != "") {
                            event.preventDefault();
                            const skill2 =
                              skill.charAt(0).toUpperCase() + skill.slice(1);
                            if (!skillsArray.includes(skill2)) {
                              setSkillsArrayMessage("");
                              setSkillsArray([...skillsArray, skill2]);
                            } else setSkillsArrayMessage(true);
                            setSkill("");
                          }
                        }}
                      />
                      {skillsArrayMessage && (
                        <div className="text-red-500">Already there</div>
                      )}
                    </div>
                  </div>
                  <div
                    className="w-100 flex justify-end"
                    onClick={submitHandler}
                  >
                    <button className="flex gap-x-2 justify-center items-center h-10 w-30 bg-blue-600 p-2 rounded-xl text-white font-bold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}

            {user == "recruiter" && (
              <div>
                <form
                  action=""
                  className={
                    profilePage == 1 ? "flex flex-wrap gap-8 mt-2" : "hidden"
                  }
                  encType="multipart/form-data"
                >
                  <div className="w-40">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      value={firstName}
                      className={
                        firstNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setFirstNameValidity(true);
                        setFirstName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-40">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      value={lastName}
                      className={
                        lastNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-40 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-40 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setLastNameValidity(true);
                        setLastName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-90">
                    <label htmlFor="mobile-number">Mobile</label>
                    <input
                      type="text"
                      id="mobile-number"
                      value={mobileNumber}
                      className={
                        mobileNumberValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setMobileNumberValidity(true);
                        setMobileNumber(event.target.value);
                      }}
                    />
                  </div>

                  <div className="w-80">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      value={companyName}
                      className={
                        companyNameValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setCompanyNameValidity(true);
                        setCompanyName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-80">
                    <label htmlFor="designation">Designation</label>
                    <input
                      type="text"
                      id="designation"
                      className={
                        designationValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      value={designation}
                      onChange={(event) => {
                        setDesignationValidity(true);
                        setDesignation(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-80">
                    <label htmlFor="companyLocation">Company Location</label>
                    <input
                      type="text"
                      id="companyLocation"
                      value={companyLocation}
                      className={
                        companyLocationValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      onChange={(event) => {
                        setCompanyLocationValidity(true);
                        setCompanyLocation(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-100 flex justify-end relative bottom-6 left-8">
                    <button
                      onClick={profilePageHandler}
                      className="flex gap-x-2 justify-center items-center h-10 w-30 bg-blue-600 p-2 rounded-xl text-white font-bold"
                    >
                      Next
                      <ArrowBigRight color={"white"} />
                    </button>
                  </div>
                </form>

                <form
                  action=""
                  className={
                    profilePage == 2 ? "flex flex-wrap gap-8 mt-4" : "hidden"
                  }
                >
                  <div className="w-80">
                    <label htmlFor="companyWebsite">Company Website</label>
                    <input
                      type="text"
                      id="companyWebsite"
                      className={
                        companyWebsiteValidity
                          ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                          : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                      }
                      value={companyWebsite}
                      onChange={(event) => {
                        setCompanyWebsiteValidity(true);
                        setCompanyWebsite(event.target.value);
                      }}
                    />
                  </div>
                  <div className="w-90">
                    <label htmlFor="targetRoles">Target Roles</label>
                    <div className="h-55">
                      <div className="flex flex-wrap gap-x-2">
                        {targetRolesArray.length > 0 &&
                          targetRolesArray.map((itr) => (
                            <div className="h-10">
                              <button className="h-fit w-fit p-2 bg-blue-300 text-xs rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                  {itr}
                                  <X
                                    size={14}
                                    onClick={(event) => {
                                      event.preventDefault();
                                      const arr = targetRolesArray.filter(
                                        (it) => it != itr,
                                      );
                                      setTargetRolesArray(arr);
                                    }}
                                  />
                                </div>
                              </button>
                            </div>
                          ))}
                      </div>
                      <input
                        type="text"
                        id="skills"
                        className={
                          targetRolesArrayValidity
                            ? "border-2 border-black rounded-lg h-10 w-90 p-4 mt-1"
                            : "border-2 border-red-500 rounded-lg h-10 w-90 p-4 mt-1"
                        }
                        onChange={(event) => {
                          setTargetRolesArrayValidity(true);
                          setTargetRole(event.target.value);
                        }}
                        value={targetRole}
                        onKeyDown={(event) => {
                          if (event.key == "Enter" && targetRole.trim() != "") {
                            event.preventDefault();
                            const targetRole2 =
                              targetRole.charAt(0).toUpperCase() +
                              targetRole.slice(1);
                            if (!targetRolesArray.includes(targetRole2)) {
                              setTargetRolesArrayMessage("");
                              setTargetRolesArray([
                                ...targetRolesArray,
                                targetRole2,
                              ]);
                            } else setTargetRolesArrayMessage(true);
                            setTargetRole("");
                          }
                        }}
                      />
                      {targetRolesArrayMessage && (
                        <div className="text-red-500">Already there</div>
                      )}
                    </div>
                  </div>
                  <div
                    className="w-100 flex justify-end"
                    onClick={submitHandler}
                  >
                    <button className="flex gap-x-2 justify-center items-center h-10 w-30 bg-blue-600 p-2 rounded-xl text-white font-bold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiledetails;
