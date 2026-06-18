import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import Host from "../Host/Host";
import { createInternship } from "../services/internshipService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Jobs2 = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  dispatch(() => setHostSwitch());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [numberOfOpenings, setNumberOfOpenings] = useState("");
  const [location, setLocation] = useState("");
  const [stipend, setStipend] = useState("");
  const [modeOfInternship, setModeOfInternship] = useState("");
  const [duration, setDuration] = useState("");
  const [applyBy, setApplyBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [company, setCompany] = useState("");
  const [domain, setDomain] = useState("");
  const [imageFile, setImageFile] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("eligibility", eligibility);
      formData.append("skills", skills);
      formData.append("about", about);
      formData.append("numberOfOpenings", numberOfOpenings);
      formData.append("location", location);
      formData.append("stipend", stipend);
      formData.append("modeOfInternship", modeOfInternship);
      formData.append("duration", duration);
      formData.append("applyBy", applyBy);
      formData.append("startDate", startDate);
      formData.append("company", company);
      formData.append("domain", domain);
      formData.append("imageFile", imageFile);
      formData.append("userName", localStorage.getItem("userName"));
      console.log(Object.fromEntries(formData));
      const response = await fetch(
        "http://localhost:3200/add-internship-posting",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        },
      );

      if (!response) {
        alert("Error");
        return;
      }

      const data = await response.json();
      if (data.success) {
        alert("Internship Posting Posted Successfully");
        navigate("/home");
        return;
      }
      alert("Internship Not Posted");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <div>
      <div
        className="h-1035 w-full text-white"
        style={{ backgroundColor: "rgb(25,25,25)" }}
      >
        <Navbar />
        {hostSwitch == "on" && <Host />}
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "relative bottom-76 opacity-25 z-10"
                : "relative bottom-60 opacity-25 z-10"
              : button == "on"
                ? "relative bottom-16 opacity-100 z-10"
                : "opacity-100 z-10"
          }
        >
          <h1 className="text-blue-400 font-semibold text-4xl ml-15">
            Host a Internship
          </h1>
          <p className="text-gray-200 text-sm mt-1 ml-15">
            Hire people who will make your Company Grow
          </p>
          <div className="ml-15 mt-10 z-20">
            <form className="flex gap-y-10 flex-wrap" onSubmit={submitHandler}>
              <div>
                <label htmlFor="company" className="text-md font-semibold mr-5">
                  Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  name="company"
                  id="company"
                  onChange={(event) => setCompany(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="title" className="text-md font-semibold mr-5">
                  Title of Internship
                </label>
                <input
                  type="text"
                  value={title}
                  name="title"
                  id="title"
                  onChange={(event) => setTitle(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <div className="text-md font-semibold mr-5 mb-5">
                  Company Logo{" "}
                </div>
                <label
                  htmlFor="imageFile"
                  className="h-10 w-100 flex justify-center items-center p-2 bg-blue-400 font-bold text-black rounded-xl"
                >
                  Select File
                </label>
                <input
                  type="file"
                  name="imageFile"
                  id="imageFile"
                  onChange={(event) => setImageFile(event.target.files[0])}
                  className="hidden"
                />
              </div>

              <div>
                <label htmlFor="domain" className="text-md font-semibold mr-5">
                  Internship Domain
                </label>
                <input
                  type="text"
                  value={domain}
                  name="domain"
                  id="domain"
                  onChange={(event) => setDomain(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="modeOfInternship"
                  className="text-md font-semibold mr-5"
                >
                  Mode Of Internship
                </label>
                <input
                  type="text"
                  value={modeOfInternship}
                  name="modeOfInternship"
                  id="modeOfInternship"
                  onChange={(event) => setModeOfInternship(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="text-md font-semibold mr-5"
                >
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  name="location"
                  id="location"
                  onChange={(event) => setLocation(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="startDate"
                  className="text-md font-semibold mr-5"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  value={startDate}
                  name="startDate"
                  id="startDate"
                  onChange={(event) => setStartDate(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="stipend" className="text-md font-semibold mr-5">
                  Stipend
                </label>
                <input
                  type="text"
                  value={stipend}
                  name="stipend"
                  id="stipend"
                  onChange={(event) => setStipend(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="text-md font-semibold mr-5"
                >
                  Duration
                </label>
                <input
                  type="text"
                  value={duration}
                  name="duration"
                  id="duration"
                  onChange={(event) => setDuration(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="applyBy" className="text-md font-semibold mr-5">
                  Apply By
                </label>
                <input
                  type="text"
                  value={applyBy}
                  name="applyBy"
                  id="applyBy"
                  onChange={(event) => setApplyBy(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="text-md font-semibold mr-5"
                >
                  Internship Description
                </label>
                <textarea
                  type="text"
                  value={description}
                  name="description"
                  id="description"
                  rows="10"
                  cols="50"
                  onChange={(event) => setDescription(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="eligibility"
                  className="text-md font-semibold mr-5"
                >
                  Eligibility
                </label>
                <textarea
                  type="text"
                  value={eligibility}
                  name="eligibility"
                  id="eligibility"
                  rows="10"
                  cols="50"
                  onChange={(event) => setEligibility(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="skills" className="text-md font-semibold mr-5">
                  Skills
                </label>
                <textarea
                  type="text"
                  value={skills}
                  name="skills"
                  id="skills"
                  rows="10"
                  cols="50"
                  onChange={(event) => setSkills(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="about" className="text-md font-semibold mr-5">
                  About Company
                </label>
                <textarea
                  type="text"
                  value={about}
                  name="about"
                  id="about"
                  rows="10"
                  cols="50"
                  onChange={(event) => setAbout(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfOpenings"
                  className="text-md font-semibold mr-5"
                >
                  Number Of Openings
                </label>
                <input
                  type="text"
                  value={numberOfOpenings}
                  name="numberOfOpenings"
                  id="numberOfOpenings"
                  onChange={(event) => setNumberOfOpenings(event.target.value)}
                  className="border-2 border-blue-400 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>
              <div className="w-310 flex justify-center">
                <button className="h-12 w-30 rounded-xl bg-blue-500 text-black font-bold flex justify-center items-center">
                  Host
                </button>
              </div>
            </form>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Jobs2;
