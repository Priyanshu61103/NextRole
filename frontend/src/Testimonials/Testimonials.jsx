import React, { useState } from 'react'
import { useSelector } from 'react-redux';
const Testimonials = () => {
  const [counter3, setCounter3] = useState(0);  
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  return (
      <div className={hostSwitch == "on" ? button==="on"?"z-20 relative bottom-110 opacity-25":"z-20 relative bottom-60 opacity-25" : button === "on"?"relative bottom-50 z-20 opacity-25":"z-20 opacity-100"}>
          <h1 className="text-4xl font-semibold mt-10 mb-2 ml-15 text-gray-300">
            Testimonials
          </h1>
          <p className="text-sm text-gray-300 ml-16 mb-20">
            Participate in these exceptional opportunities curated for the
            exceptional you!
          </p>
          <div className="w-full h-70 flex gap-x-4 items-center mx-5 justify-center mb-30">
            <button onClick={() => setCounter3(counter3 - 1)}>
              <img src="less_than_icon.png" alt="" className="h-5 w-3" />
            </button>
            {counter3 <= 0 && (
              <div
                className="h-90 w-90 rounded-xl border-2 border-blue-400 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <h1 className="text-blue-400 text-xl font-bold mb-5">
                  Go-to platform for students and freshers
                </h1>
                <p className="text-gray-300 text-sm">
                  I landed my First Job from SkillSync! This app has
                  opportunities for every student and is a must-have for
                  students looking to build their careers.
                </p>
                <div className="h-0.5 w-80 bg-gray-300 opacity-25 relative top-25"></div>
                <div className="flex gap-x-4 justify-center items-center relative top-30">
                  <img
                    src="../profile_icon_1.jpg"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="text-blue-400">
                    <h1 className="text-md font-bold">Hari Thakur</h1>
                    <p className="text-sm">Software Engineer at Meta</p>
                  </div>
                </div>
              </div>
            )}
            {counter3 <= 1 && (
              <div
                className="h-90 w-90 rounded-xl border-2 border-blue-400 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <h1 className="text-blue-400 text-xl font-bold mb-5">
                  Got my dream job at Google!
                </h1>
                <p className="text-gray-300 text-sm">
                  I applied to Google and got the job! It was my dream. I wanted
                  to get into tech but I was from an electrical background. I
                  learned the skills, which came in handy in my interviews.
                  Thanks to SkillSync, I was able to explain the concepts and
                  applications well. They helped me with everything.
                </p>
                <div className="h-0.5 w-80 bg-gray-300 opacity-25 relative top-17"></div>
                <div className="flex gap-x-4 justify-center items-center relative top-22">
                  <img
                    src="../profile_icon_2.jpg"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="text-blue-400">
                    <h1 className="text-md font-bold">Radha Sharma</h1>
                    <p className="text-sm">Data Analyst at Google</p>
                  </div>
                </div>
              </div>
            )}
            {
              <div
                className="h-90 w-90 rounded-xl border-2 border-blue-400 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <h1 className="text-blue-400 text-xl font-bold mb-5">
                  Turning doubts into success
                </h1>
                <p className="text-gray-300 text-sm">
                  I had no idea how to enter the corporate world, what kind of
                  job would be a good fit for me, or where to even start.
                  SkillSync guided me through the entire process, helping me
                  build the right skills and confidence. Thanks to their support
                  and resources, I was able to secure an internship, which
                  eventually led to a job offer from Flipkart.
                </p>
                <div className="h-0.5 w-80 bg-gray-300 opacity-25 relative top-12"></div>
                <div className="flex gap-x-4 justify-center items-center relative top-17">
                  <img
                    src="../profile_icon_3.jpg"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="text-blue-400">
                    <h1 className="text-md font-bold">Rohan Wagela</h1>
                    <p className="text-sm">
                      Software Developer Intern at Flipkart
                    </p>
                  </div>
                </div>
              </div>
            }

            {counter3 >= 1 && (
              <div
                className="h-90 w-90 rounded-xl border-2 border-blue-400 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <h1 className="text-blue-400 text-xl font-bold mb-5">
                  Got an internship at Flipkart
                </h1>
                <p className="text-gray-300 text-sm">
                  After facing disappointments from campus placement rejections,
                  I turned to SkillSync. I learned valuable skills, how to crack
                  interviews, and how to make a strong resume through their
                  guidance. A few months later, I secured a data science
                  internship with Microsoft. It's my first job after graduation.
                  The office is huge, and I love it here!
                </p>
                <div className="h-0.5 w-80 bg-gray-300 opacity-25 relative top-7"></div>
                <div className="flex gap-x-4 justify-center items-center relative top-12">
                  <img
                    src="../profile_icon_4.jpg"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="text-blue-400">
                    <h1 className="text-md font-bold">Ben Carter</h1>
                    <p className="text-sm">Data Science Intern at Microsoft</p>
                  </div>
                </div>
              </div>
            )}

            {counter3 >= 2 && (
              <div
                className="h-90 w-90 rounded-xl border-2 border-blue-400 p-5"
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <h1 className="text-blue-400 text-xl font-bold mb-5">
                  Good support and doubt solving
                </h1>
                <p className="text-gray-300 text-sm">
                  What stood out for me was the quick resolution of my doubts
                  and queries. SkillSync gave me all the support I needed to
                  restart my career - from sharing placement opportunities to
                  interview preparation.
                </p>
                <div className="h-0.5 w-80 bg-gray-300 opacity-25 relative top-22"></div>
                <div className="flex gap-x-4 justify-center items-center relative top-27">
                  <img
                    src="../profile_icon_5.jpg"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div className="text-blue-400">
                    <h1 className="text-md font-bold">Akshay Singh</h1>
                    <p className="text-sm">Software Engineer at JP Morgan</p>
                  </div>
                </div>
              </div>
            )}

            <button onClick={() => setCounter3(counter3 + 1)}>
              <img src="more_than_icon.png" alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
  )
}

export default Testimonials