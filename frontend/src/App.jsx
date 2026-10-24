import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Internships from "./pages/Internships.jsx";
import { store } from "./utils/redux/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Jobs2 from "./pages/Jobs2.jsx";
import Internships2 from "./pages/Internships2.jsx";
import Resume from "./pages/Resume.jsx";
import Interview from "./pages/Interview.jsx";
import About from "./pages/About.jsx";
import ResumeFeedBack from "./pages/ResumeFeedBack.jsx";
import "react-toastify/dist/ReactToastify.css";
import JobDetails from "./pages/JobDetails.jsx";
import InternshipDetails from "./pages/InternshipDetails.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import Profiledetails from "./pages/Profiledetails.jsx";
import Protected from "./components/Protected.jsx";
import StudentProfilePage from "./pages/StudentProfilePage.jsx";
import StudentEditProfile from "./pages/StudentEditProfile.jsx";
import RecruiterProfilePage from "./pages/RecruiterProfilePage.jsx";
import RecruiterEditProfile from "./pages/RecruiterEditProfile.jsx";
import InterviewRoom from "./pages/InterviewRoom.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobpostings" element={<Protected><Jobs /></Protected>}></Route>
          <Route path="/internships" element={<Protected><Internships /></Protected>}></Route>
          <Route path="/resume" element={<Protected><Resume /></Protected>}></Route>
          <Route path="/jobhost" element={<Protected><Jobs2 /></Protected>}></Route>
          <Route path="/internshiphost" element={<Protected><Internships2 /></Protected>}></Route>
          <Route path="/aiinterview" element={<Protected><Interview /></Protected>}></Route>
          <Route path="/jobdetails" element={<Protected><JobDetails /></Protected>}></Route>
          <Route
            path="/internshipdetails"
            element={<Protected><InternshipDetails /></Protected>}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume-feedback" element={<Protected><ResumeFeedBack /></Protected>}></Route>
          <Route path="/otp-verification" element={<OtpVerification />}></Route>
          <Route path="/profile-details" element={<Profiledetails/>}></Route>
          <Route path="/student-profile" element={<StudentProfilePage/>}></Route>
          <Route path="/recruiter-profile" element={<RecruiterProfilePage/>}></Route>
          <Route path="/student-edit-profile" element={<StudentEditProfile/>}></Route>
          <Route path="/recruiter-edit-profile" element={<RecruiterEditProfile/>}></Route> 
          <Route path="/ai-interview" element={<InterviewRoom/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
