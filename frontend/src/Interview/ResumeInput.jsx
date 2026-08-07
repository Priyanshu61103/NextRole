import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeInputButton } from "../Redux/Slice/ResumeInputButtonSlice/resumeInputButtonSlice";
import { useNavigate } from "react-router-dom";

const ResumeInput = () => {
  const [positionType, setPositionType] = useState("job");
  const [positionTitle, setPositionTitle] = useState("");
  const [positionDescription, setPositionDescription] = useState("");
  const [targetCompany, setTargetCompany] = useState(
    "--select target company--",
  );
  const [resume, setResume] = useState("");
  const [positionTitleValidity, setPositionTitleValidity] = useState(true);
  const [positionDescriptionValidity, setPositionDescriptionValidity] =
    useState(true);
  const [resumeValidity, setResumeValidity] = useState(true);
  const [targetCompanyValidity, setTargetCompanyValidity] = useState(true);
  const [selectOpen, setSelectOpen] = useState(false);
  const navigate = useNavigate();
  const resumeInputButton = useSelector(
    (state) => state.resumeInputButton.value,
  );
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (positionTitle == "") {
      setPositionTitleValidity(false);
      return;
    }
    if (positionDescription == "") {
      setPositionDescriptionValidity(false);
      return;
    }
    if (targetCompany == "--select target company--") {
      setTargetCompanyValidity(false);
      return;
    }
    if (resume == "") {
      setResumeValidity(false);
      return;
    }

    const formData = new FormData();
    formData.append("userName",localStorage.getItem("userName"));
    formData.append("type", positionType);
    formData.append("title", positionTitle);
    formData.append("description", positionDescription);
    formData.append("targetCompany",targetCompany);
    formData.append("resume", resume);

    const response = await fetch("http://localhost:3200/ai-interview-data", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response) return;
    const data = await response.json();
    if (data.success) {
        navigate("/ai-interview"); 
    }
  };

  return (
    <div className="w-screen rounded-2xl flex justify-center">
      <div
        className="h-155 w-120 border-4 border-blue-500 rounded-2xl p-4"
        style={{ backgroundColor: "rgb(25,25,25)" }}
      >
        <form>
          <div className="flex justify-around">
            <div className="flex gap-x-10">
              <button
                className={
                  positionType === "job"
                    ? "p-2 bg-blue-500 rounded-2xl font-bold text-lg w-40"
                    : "p-1 border-2 border-blue-500 rounded-2xl w-40"
                }
                onClick={(event) => {
                  event.preventDefault();
                  setPositionType("job");
                }}
              >
                Job
              </button>
              <button
                className={
                  positionType === "internship"
                    ? "p-2 bg-blue-500 font-bold text-lg rounded-2xl w-40"
                    : "p-1 border-2 border-blue-500 rounded-2xl w-40"
                }
                onClick={(event) => {
                  event.preventDefault();
                  setPositionType("internship");
                }}
              >
                Internship
              </button>
            </div>
            <div className="mt-2">
              <X onClick={() => dispatch(setResumeInputButton())} />
            </div>
          </div>
          <div className="w-100 m-2 mt-4">
            <label htmlFor="positionTitle" className="font-bold m-2">
              {positionType === "job" ? "Job Title" : "Internship Title"}
            </label>
            <input
              type="text"
              id="positionTitle"
              onChange={(event) => {
                setPositionTitle(event.target.value);
                setPositionTitleValidity(true);
              }}
              className={
                positionTitleValidity
                  ? "border-4 border-blue-600 rounded-2xl p-2 m-2 mb-1 w-100 outline-0"
                  : "border-4 border-red-600 rounded-2xl p-2 m-2 mb-1 w-100 outline-0"
              }
            />
            <p className="text-xs text-red-600 ml-5">
              {!positionTitleValidity
                ? positionType == "job"
                  ? "Job Title is Missing"
                  : "Internship Title is Missing"
                : ""}
            </p>
          </div>
          <div className="w-100 h-40 m-2">
            <label htmlFor="positionDescription" className="font-bold m-2">
              {positionType === "job"
                ? "Job Description"
                : "Internship Description"}
            </label>
            <textarea
              type="text"
              id="positionDescription"
              onChange={(event) => {
                setPositionDescription(event.target.value);
                setPositionDescriptionValidity(true);
              }}
              className={
                positionDescriptionValidity
                  ? "border-4 border-blue-600 h-30 rounded-2xl p-2 m-2 mb-0 w-100 outline-0"
                  : "border-4 h-30 border-red-600 rounded-2xl p-2 m-2 mb-0 w-100 outline-0"
              }
            />
            {!positionDescriptionValidity && (
              <p className="text-xs text-red-600 ml-5">
                {positionType == "job"
                  ? "Job Description is Missing"
                  : "Internship Description is Missing"}
              </p>
            )}
          </div>
          <div className="w-100 h-20 m-2 mt-4">
            <label htmlFor="target-company" className="font-bold m-2">
              Target Company
            </label>
            <select
              id="target-company"
              className={
                targetCompanyValidity
                  ? selectOpen
                    ? "border-4 border-blue-600 p-2 m-2 mb-0 rounded-2xl rounded-b-none w-100 outline-0"
                    : "border-4 border-blue-600 p-2 m-2 mb-0 rounded-2xl w-100 outline-0"
                  : "border-4 border-red-600 p-2 m-2 rounded-2xl mb-0 w-100 outline-0"
              }
              onClick={() => {setSelectOpen(!selectOpen)}}
              onChange={(event)=>setTargetCompany(event.target.value)}
            >
              <option value = "--select-target-company--" className="bg-[rgb(25,25,25)] text-white text-center font-bold">
                --Select Target Company--
              </option>
              <option value = "service-based-companies" className="bg-[rgb(25,25,25)] text-white text-center font-bold">
                Service Based Companies
              </option>
              <option value="product-based-companies" className="bg-[rgb(25,25,25)] text-white text-center font-bold">
                Product Based Companies
              </option>
              <option value="startup" className="bg-[rgb(25,25,25)] text-white text-center font-bold">
                Startup
              </option>
            </select>
          </div>
          {!targetCompanyValidity && (
            <p className="text-xs text-red-600 ml-5">
              Please Select Target Company
            </p>
          )}
          <div className="w-100 m-2 mb-1">
            <div className="font-bold m-4 mb-0">Upload Resume</div>
            <label
              htmlFor="uploadResume"
              className={
                resumeValidity
                  ? "bg-blue-600 rounded-2xl p-1 m-2 mb-1 flex justify-center items-center w-100"
                  : "bg-red-600 rounded-2xl p-1 m-2 mb-1 flex justify-center items-center w-100"
              }
            >
              Upload
            </label>
            <input
              type="file"
              id="uploadResume"
              className="hidden outline-0"
              onChange={(event) => {
                setResume(event.target.files[0]);
                setResumeValidity(true);
              }}
            />
            {!resumeValidity ? (
              <p className="text-xs text-red-600 ml-5">Resume is Missing</p>
            ) : (
              <p className="text-xs text-red-600 ml-5 mb-6"></p>
            )}
          </div>

          <div className="w-full flex justify-center" onClick={submitHandler}>
            <button className="bg-blue-700 p-2 w-50 font-bold flex justify-center items-center rounded-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeInput;
