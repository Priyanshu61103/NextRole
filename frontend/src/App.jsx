import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Jobs2 from "./Jobs Host/Jobs2";
import Internships2 from "./Internships Host/Internships2";
import Resume from "./Resume/Resume.jsx";
import Interview from "./Interview/Interview.jsx";
import AiSetup from "./Interview/Aisetup.jsx";
import About from "./About/About.jsx";
import ResumeFeedBack from "./Resume/ResumeFeedBack.jsx";
import "react-toastify/dist/ReactToastify.css";
import JobDetails from "./Details/JobDetails.jsx";
import InternshipDetails from "./Details/InternshipDetails.jsx";
import SignUpPage from "./SignUpPage/SignUpPage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import OtpVerification from "./Otp Verification/OtpVerification.jsx";
import Profiledetails from "./Profile Details/Profiledetails.jsx";
import Protected from "./Protected/Protected.jsx";
import ProfilePage from "./Profile Page/ProfilePage.jsx";
import EditProfile from "./Edit Profile/editProfile.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/home" element={<Protected><Home /></Protected>}></Route>
          <Route path="/jobpostings" element={<Protected><Jobs /></Protected>}></Route>
          <Route path="/internships" element={<Protected><Internships /></Protected>}></Route>
          <Route path="/resume" element={<Protected><Resume /></Protected>}></Route>
          <Route path="/jobhost" element={<Protected><Jobs2 /></Protected>}></Route>
          <Route path="/internshiphost" element={<Protected><Internships2 /></Protected>}></Route>
          <Route path="/aiinterview" element={<Protected><Interview /></Protected>}></Route>
          <Route path="/aisetup" element={<Protected><AiSetup /></Protected>}></Route>
          <Route path="/jobdetails" element={<Protected><JobDetails /></Protected>}></Route>
          <Route
            path="/internshipdetails"
            element={<Protected><InternshipDetails /></Protected>}
          ></Route>
          <Route path="/about" element={<Protected><About /></Protected>}></Route>
          <Route path="/resume-feedback" element={<Protected><ResumeFeedBack /></Protected>}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/otp-verification" element={<OtpVerification />}></Route>
          <Route path="/profile-details" element={<Profiledetails/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/edit-profile" element={<EditProfile/>}></Route>
        </Routes>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        /> */}
      </Router>
    </Provider>
  );
};

export default App;
