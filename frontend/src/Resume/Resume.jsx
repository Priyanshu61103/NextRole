import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Host from "../Host/Host";
import { analyzeResume } from "../services/resumeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const [submitResume, setSubmitResume] = useState(0);
  const [resumeAnalyzerData, setresumeAnalyzerData] = useState({
    resume: "",
  });
  const navigate = useNavigate();

  const resumeHandler = () => {
    submitResume == 1 ? setSubmitResume(0) : setSubmitResume(1);
    console.log(submitResume);
  };
  
  const handler = (e) => {
     setresumeAnalyzerData({ ...resumeAnalyzerData, resume : e.target.files[0]});     
  }
  
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(resumeAnalyzerData);
    const responseMessage = await analyzeResume(resumeAnalyzerData);
    toast.success("Resume Analyzed Successfully")
    console.log(responseMessage);

    setresumeAnalyzerData({
      resume:""
    });
    
    navigate("/resume-feedback");

  }
  return (
    <div
      className="h-845 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}

      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? "relative bottom-115 opacity-25 z-10 flex gap-10 m-7 mx-20"
              : "relative bottom-65 opacity-25 z-10 flex gap-10 m-7 mx-20"
            : button == "on"
            ? "relative bottom-55 opacity-25 z-10 flex gap-10 m-7 mx-20"
            : "opacity-100 z-10 flex gap-10 m-7 mx-20"
        }
      >
        <div className="w-150">
          <h1 className="text-xl text-gray-300 font-semibold mb-10">
            SCORE MY RESUME - FREE RESUME CHECKER
          </h1>
          <h1 className="text-6xl text-blue-500 font-bold mb-10">
            Get expert feedback on your resume, instantly
          </h1>
          <h1 className="text-xl text-gray-300 mb-10">
            Our free AI-powered resume checker scores your resume on key
            criteria recruiters and hiring managers look for. Get actionable
            steps to revamp your resume and land more interviews.
          </h1>

          <div>
            <button
              className="h-15 w-55 bg-blue-500 rounded-xl p-5 flex gap-x-1 justify-center items-center"
              onClick={resumeHandler}
            >
              <img src="../download.png" alt="" className="h-8 w-8" />
              <h1 className="text-md text-black font-bold">Scan your Resume</h1>
            </button>
          </div>
        </div>

        <div className="relative bottom-2 left-20">
          <img src="../resume.png" alt="" />
        </div>
      </div>

      {submitResume == 1 && (
        <div className="w-full flex justify-center relative bottom-100 left-20">
          <div
            className="h-100 w-200 rounded-xl p-5 border-2 border-blue-500 relative bottom-20"
            style={{ backgroundColor: "rgb(20,20,20)" }}
          >
            <h1 className="text-blue-500 text-4xl font-bold">
              Scan Your Resume
            </h1>
            <div className="h-100 w-200 flex justify-center items-center">
              <form onSubmit={submitHandler}>
                <input type="file" name="resume" className="border-2 border-blue-500 h-10 w-100 rounded-xl relative right-10" onChange={handler}/>
                <button className="h-15 w-55 bg-blue-500 rounded-xl p-5 flex gap-x-1 justify-center items-center relative left-10 top-10" >
                  <h1 className="text-md text-black font-bold">Submit</h1>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div
        className={
          hostSwitch === "on"
            ? button === "on"
              ? "flex justify-center relative bottom-81 text-gray-300 text-xl opacity-25"
              : "flex justify-center relative bottom-65 text-gray-300 text-xl opacity-25"
            : button === "on"
            ? "flex justify-center text-gray-300 relative bottom-21 text-xl"
            : "flex justify-center text-gray-300 text-xl"
        }
      >
        <div className="h-100 w-180">
          <p className="mb-5">
            On average, only 15% of resumes get past applicant tracking systems
            (ATS) and into the hands of recruiters. But what is an ATS, and how
            can you ensure your resume isn’t lost in the digital abyss?
          </p>

          <p className="mb-5">
            An ATS is a software program that companies use to screen resumes
            for skills and qualifications from the job description.
          </p>

          <p className="mb-5">
            To make it through, you’ll need an ATS-friendly resume template with
            clear formatting and relevant keywords, and our ATS Resume Checker
            is here to help.
          </p>

          <p className="mb-5">
            Upload your resume for on-the-spot tips to improve your score.
            Implement changes from any device with MyPerfectResume’s Resume
            Builder and create your job-winning resume in minutes.
          </p>
        </div>
      </div>
      <div
        className={
          hostSwitch === "on"
            ? button === "on"
              ? "relative bottom-81 opacity-25"
              : "relative bottom-65 opacity-25"
            : button === "on"
            ? "relative bottom-21"
            : "none"
        }
      >
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl text-blue-500  font-semibold">
            Scan your Resume for ATS
          </h1>
        </div>

        <div className="flex justify-center">
          <div>
            <div className="h-10 w-10 rounded-full border-4 border-blue-500 flex justify-center items-center">
              <h1 className="text-gray-300 text-xl font-bold">1</h1>
            </div>
          </div>
          <div className="h-1 w-40 bg-gray-300 relative top-4"></div>

          <div className="h-10 w-10 rounded-full border-4 border-gray-300 flex justify-center items-center">
            <h1 className="text-gray-300 text-xl font-bold">2</h1>
          </div>
          <div className="h-1 w-40 bg-gray-300 relative top-4"></div>

          <div className="h-10 w-10 rounded-full border-4 border-gray-300 flex justify-center items-center">
            <h1 className="text-gray-300 text-xl font-bold">3</h1>
          </div>
        </div>

        <div className="flex justify-center gap-x-28 mt-2">
          <div className="font-bold text-blue-500">
            <h1>Upload Resume</h1>
          </div>

          <div className="text-gray-300 relative right-2.5">
            <h1>ATS Scan</h1>
          </div>

          <div className="text-gray-300">
            <h1>View Results</h1>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="h-100 w-200 rounded-xl border-2 border-dotted border-gray-300">
            <div className="flex justify-center">
              <img src="../download3.png" alt="" className="h-40 w-40" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-500 flex justify-center">
                Drag and drop a file here
              </h1>
            </div>
            <div>
              <h1 className="text-md text-gray-300 flex justify-center mt-2">
                Files we can read: DOC,PDF
              </h1>
            </div>

            <div className="flex justify-center mt-10">
              <button className="h-15 w-55 bg-blue-500 rounded-xl p-5 flex gap-x-1 justify-center items-center">
                <img src="../download.png" alt="" className="h-8 w-8" />
                <h1 className="text-md text-black font-bold">
                  Scan your Resume
                </h1>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center my-10">
            <h1 className="text-4xl text-blue-100  font-semibold">
              How we Enhance your Resume
            </h1>
          </div>
        </div>

        <div className="h-120 w-full flex items-center mt-10 bg-blue-100">
          <div className="flex justify-center gap-10 flex-wrap">
            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Optimized for ATS
              </h1>
              <p className="font-semibold text-md text-gray-300">
                Use our Resume Builder to implement expert-recommended updates
                designed to optimize your resume for ATS screening.
              </p>
            </div>
            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Professional summary
              </h1>
              <p className="font-semibold text-md text-gray-300">
                A professional summary at the top of your resume grabs the
                hiring manager's attention with a brief snapshot of your top
                skills and qualifications.
              </p>
            </div>

            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Optimal length
              </h1>
              <p className="font-semibold text-md text-gray-300">
                Aim for a concise, one-page resume. This length allows employers
                to review essential information without potential distractions.
              </p>
            </div>

            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Comprehensiveness
              </h1>
              <p className="font-semibold text-md text-gray-300">
                A comprehensive resume includes contact information, a
                professional summary, industry-relevant skills, work experience,
                and education.
              </p>
            </div>

            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Measurable results
              </h1>
              <p className="font-semibold text-md text-gray-300">
                Our resume scanner checks your work history section for
                measurable accomplishments that demonstrate impressive
                achievements in past roles.
              </p>
            </div>

            <div
              className="h-50 w-80 rounded-xl ml-10 border-2 border-blue-500 p-4"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <h1 className="font-bold text-xl text-blue-500 mb-5">
                Contact information
              </h1>
              <p className="font-semibold text-md text-gray-300">
                Display your phone number and email so employers can get in
                touch. Explore resume examples to see how to list your contact
                information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Resume;
