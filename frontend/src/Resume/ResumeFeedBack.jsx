import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import AtsScore from "./AtsScore.jsx";

// The new JSON data you provided
const reportJson = {
  response: {
    ats_score: 80,
    recruiter_advice: [
      "Add a concise, tailored professional summary at the top, highlighting your career objectives and key technical strengths[1][2].",
      "Structure the resume clearly with standard section headings (e.g., Summary, Experience, Projects, Skills, Education, Achievements) and use consistent, professional formatting[5][6].",
      "Quantify achievements in both projects and experience (e.g., ‘Increased platform users by X%’, ‘Reduced bug reports by Y%’)[1].",
      "Tailor the resume for each job application by incorporating keywords from the job description to improve ATS compatibility[3][4].",
      "Include a LinkedIn profile link; this is now a standard expectation and supports your professional brand.",
      "Focus on the most relevant skills and remove or minimize less relevant hobbies/interests.",
      "Proofread carefully to eliminate typos and formatting inconsistencies.",
      "Consider condensing the resume to one page, focusing on the most impactful and relevant information[6].",
      "For each project, briefly state the problem, your solution, the technologies used, and the measurable impact.",
      "Highlight any open-source contributions or collaborative coding experience, if applicable.",
      "List certifications or online courses (e.g., React.js Bootcamp) under a dedicated Certifications section if space allows.",
    ],
    strengths: [
      "Strong academic background with a high CGPA (9.1) from a recognized institution.",
      "Demonstrated initiative through multiple personal projects that are deployed and accessible (internIQ, Online IDE, removeBG), showcasing full-stack development skills.",
      "Active content creator with a YouTube channel, indicating communication skills and a passion for teaching—valuable for roles requiring team collaboration and mentorship.",
      "Diverse technical skills across languages (Python, C++, JavaScript), frameworks (Flask, Django, React.js), and tools (Docker, Git, PowerBI).",
      "Relevant internship experience contributing to a live project, including feature development, user management, and payment integration.",
      "Multiple achievements in technical competitions and conferences, highlighting problem-solving and presentation abilities.",
      "Clear listing of soft skills (problem-solving, adaptability, self-learning) and interests, which can help with culture fit assessment.",
    ],
    weaknesses: [
      "Resume lacks a professional summary or objective statement—crucial for quickly communicating career goals and value proposition to recruiters.",
      "No LinkedIn profile link is provided in the contact section, which is a standard expectation for technical roles.",
      "Work experience section is underdeveloped; the internship could be expanded with more specific achievements, metrics, and outcomes (e.g., user growth, system improvements).",
      "Project descriptions are somewhat generic; they would benefit from quantifiable results (e.g., user base, performance metrics, impact).",
      "The resume does not clearly follow a standard structure; sections are inconsistently formatted, and the use of non-standard symbols (e.g., §, ï, Æ) is distracting and unprofessional.",
      "No mention of ATS (Applicant Tracking System) optimization, such as tailored keywords or clear section headings, which is critical in 2025 for getting past initial screening[3][4].",
      "Some skills and interests (e.g., investing, meditation) are not directly relevant to technical roles and could be streamlined to focus on core competencies.",
      "The resume exceeds one page without clear justification—best practice is to keep it concise, especially for early-career candidates[6].",
    ],
  },
};

const ResumeFeedBack = () => {
  let reportData = reportJson;
  const { ats_score, recruiter_advice, strengths, weaknesses } =
    reportData.response;

  // Base classes for list items to avoid repetition
  const listItemBaseClasses = "mb-2 leading-relaxed";
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(()=>setSpinner(false),3000);
  }, [])
  

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-amber-50">
      {/* Page container */}
      <Navbar />
      {spinner && (
        <div className="h-150 w-full flex justify-center items-center">
          <div className="h-10 w-10 border-6 border-blue-500 border-b-blue-800 rounded-full animate-spin"></div>
        </div>
      )}
      {!spinner && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid layout */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left: Score + Advice */}
            <section
              aria-labelledby="ats-score-section"
              className="rounded-xl border border-white/10 bg-neutral-800/50 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <h2
                  id="ats-score-section"
                  className="text-center text-3xl sm:text-4xl font-semibold tracking-tight"
                >
                  Your Score
                </h2>

                <div className="mx-auto mt-6 w-full max-w-[14rem] sm:max-w-[16rem]">
                  <AtsScore score={ats_score} />
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-blue-600 text-2xl sm:text-3xl font-medium mb-4">
                  Recruiter’s Advice
                </h3>
                <ul className="list-decimal pl-6 space-y-2 marker:text-blue-600">
                  {recruiter_advice.map((item, index) => (
                    <li
                      key={index}
                      className="text-[1.05rem] leading-relaxed text-amber-50/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Right: Resume Analysis */}
            <section
              aria-labelledby="resume-analysis"
              className="rounded-xl border border-white/10 bg-neutral-800/50 p-6 backdrop-blur-sm"
            >
              <h2
                id="resume-analysis"
                className="text-center text-3xl sm:text-5xl font-medium tracking-tight"
              >
                Resume Analysis
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-8">
                {/* Strengths */}
                <div>
                  <h3 className="text-green-400 text-2xl sm:text-3xl font-medium mb-4">
                    Strengths
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-green-400">
                    {strengths.map((item, index) => (
                      <li
                        key={index}
                        className="text-[1.05rem] leading-relaxed text-amber-50/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div>
                  <h3 className="text-yellow-300 text-2xl sm:text-3xl font-medium mb-4">
                    Points to Improve
                  </h3>
                  <ul className="list-decimal pl-6 space-y-2 marker:text-yellow-300">
                    {weaknesses.map((item, index) => (
                      <li
                        key={index}
                        className="text-[1.05rem] leading-relaxed text-amber-50/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom spacing */}
          <div className="h-8 sm:h-10" />
        </div>
      )}
    </div>
  );
};
export default ResumeFeedBack;
