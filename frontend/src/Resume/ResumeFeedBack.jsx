import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import AtsScore from "./AtsScore.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer/Footer.jsx";
import { Check, Code, Lightbulb, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";

// The new JSON data you provided
const ResumeFeedBack = () => {
  const location = useLocation();
  const info = location.state;
  console.log(info.analysis);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);
  return (
    <div className="h-fit w-full" style={{ backgroundColor: "rgb(25,25,25)" }}>
      <Navbar />
      {spinner && 
         <div>
             <Spinner/> 
        </div>}
      {!spinner && (
        <div>
          <div className="flex justify-center">
            <div>
              <div className="text-5xl font-semibold text-blue-500">
                Resume Feedback
              </div>
              <div className="txet-2xl text-gray-200 text-center">
                Here's a detailed breakdown of your resume
              </div>
            </div>
          </div>
          <div className="h-fit w-full rounded-xl flex justify-center items-center">
            <div>
              <div className="h-50 w-full m-10 bg-black rounded-3xl flex justify-around items-center p-10">
                <div className="h-40 w-40 border-2 text-white text-6xl border-blue-500 rounded-full flex justify-center items-center">
                  {info.analysis.overallScore}
                </div>
                <div>
                  <div className="text-xl text-white my-2 font-semibold">
                    OVERALL SCORE
                  </div>
                  <div className="w-180 text-lg text-gray-300">
                    {info.analysis.summary}
                  </div>
                </div>
              </div>

              <div
                className="h-fit w-full m-10 rounded-3xl flex justify-around items-center p-5"
                style={{ backgroundColor: "rgb(12,12,12)" }}
              >
                <div>
                  <div className="text-xl text-white mb-4 font-semibold flex gap-x-2">
                    <div className="h-8 w-8 border-2 border-green-700 rounded-full flex justify-center items-center">
                      <Check color="green" />
                    </div>
                    Strengths
                  </div>
                  {info.analysis.strengths.map((itr, index) => (
                    <div className="h-fit w-220 bg-black p-4 rounded-xl my-5 text-lg text-gray-300 flex justify-center items-center gap-x-4">
                      <div className="h-6 w-6 border-2 font-semibold border-green-500 text-green-500 flex justify-center items-center rounded-full p-4">
                        {index}.
                      </div>
                      <div className="w-180">{itr}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="h-fit w-full m-10 rounded-3xl flex justify-around items-center p-5"
                style={{ backgroundColor: "rgb(12,12,12)" }}
              >
                <div>
                  <div className="text-xl text-white mb-4 font-semibold flex gap-x-2">
                    <div className="h-8 w-8 border-2 border-red-500 rounded-full flex justify-center items-center">
                      <X color="red" />
                    </div>
                    Weaknesses
                  </div>
                  {info.analysis.weaknesses.map((itr, index) => (
                    <div className="h-fit w-220 bg-black p-4 rounded-xl my-5 text-lg text-gray-300 flex justify-center items-center gap-x-4">
                      <div className="h-6 w-6 border-2 font-semibold border-red-500 text-red-500 flex justify-center items-center rounded-full p-4">
                        {index}.
                      </div>
                      <div className="w-180">{itr}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="h-fit w-full m-10 rounded-3xl flex justify-around items-center p-5"
                style={{ backgroundColor: "rgb(12,12,12)" }}
              >
                <div>
                  <div className="text-xl text-white mb-4 font-semibold flex gap-x-2">
                    <div className="h-8 w-8 border-2 border-blue-700 rounded-full flex justify-center items-center">
                      <Lightbulb color="blue" />
                    </div>
                    Suggestions
                  </div>
                  {info.analysis.suggestions.map((itr, index) => (
                    <div className="h-fit w-220 bg-black p-4 rounded-xl my-5 text-lg text-gray-300 flex justify-center items-center gap-x-4">
                      <div className="h-6 w-6 border-2 font-semibold border-blue-500 text-blue-500 flex justify-center items-center rounded-full p-4">
                        {index}.
                      </div>
                      <div className="w-180">{itr}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="h-fit w-full m-10 rounded-3xl flex justify-around items-center p-5"
                style={{ backgroundColor: "rgb(12,12,12)" }}
              >
                <div>
                  <div className="text-xl text-white mb-4 font-semibold flex gap-x-2">
                    <div className="h-8 w-8 border-2 border-yellow-200 rounded-full flex justify-center items-center">
                      <Code color="yellow" />
                    </div>
                    Skills Detected
                  </div>
                  <div className="w-220 flex gap-x-5">
                    {info.analysis.skills.map((itr, index) => (
                      <div className="h-fit w-fit bg-yellow-300  font-semibold text-black p-2 rounded-2xl my-5 text-lg flex justify-center items-center gap-x-4">
                        <div>{itr}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Testimonials />
      <Footer />
    </div>
  );
};
export default ResumeFeedBack;
