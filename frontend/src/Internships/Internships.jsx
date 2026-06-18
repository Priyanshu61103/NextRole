import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import Host from "../Host/Host";
import { getAllInternships } from "../services/internshipService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../Redux/Slice/detailSlice/detailSlice";
import { useNavigate } from "react-router-dom";
const Internships = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const details = useSelector((state) => state.details.value);
  const [internshipData, setInternshipData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchInternshipData = async () => {
    try {
      const response = await fetch("http://localhost:3200/fetch-internship-data", {
        method: "GET",
        credentials: "include",
      });

      if (!response) {
        return;
      }

      const data = await response.json();

      if (data.success) {
        setInternshipData(data.result);
        return;
      }
      console.log(data.message);
      alert("Internship Data Not Loaded");
    } catch (error) {
      console.log(error);
      alert("Internal Server Error");
    }
  };

  useEffect(() => {
    fetchInternshipData();
  }, []);

  const saveDetails = (data) => {
    dispatch(setDetails(data));
    navigate("/internshipdetails");
  };
  return (
    <div
      className="h-760 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      <div
        className={
          hostSwitch == "on"
            ? button == "on"
              ? "relative bottom-110 opacity-25 z-10"
              : "relative bottom-60 opacity-25 z-10"
            : button == "on"
              ? "relative bottom-50 z-10 opacity-25"
              : "opacity-100 z-10"
        }
      >
        <div className="flex gap-10">
          <Filter />
          <div>
            <div className="flex justify-center mb-2">
              <h1 className="text-4xl text-gray-300 font-semibold">
                Internships
              </h1>
            </div>
            <div className="flex justify-center mb-10">
              <h1 className="text-md text-gray-300">
                Find the Internships that fit your career aspirations.
              </h1>
            </div>

            {internshipData.length > 0 ? (
              internshipData.map((internship, index) => (
                <div
                  key={index}
                  className="h-60 w-180 rounded-xl border-2 border-blue-500 p-5 mb-10"
                  style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                >
                  <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                    <img src="../target_icon.png" alt="" className="h-7 w-7" />
                    <h1 className="text-xs text-blue-400">Actively Hiring</h1>
                  </div>
                  <div className="w-160 h-20 flex mt-1 flex-row justify-between items-center">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-300 mt-4">
                        {internship.title}
                      </h1>
                      <h2 className="text-sm text-gray-300 mt-1">
                        {internship.company}
                      </h2>
                    </div>
                    <div className="h-fit w-30 relative bottom-5">
                      <img
                        src={internship.imageFile}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-170 flex justify-center my-1">
                    <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
                  </div>
                  <div className="w-160 h-20 flex mt-1 flex-row justify-between items-center">
                    <div>
                      <div className="flex gap-2 mt-5">
                        <img
                          src="../location_image.png"
                          alt=""
                          className="h-4 w-4"
                        />
                        <p className="text-xs text-gray-300">
                          {internship.location}
                        </p>
                      </div>

                      <div className="flex justify-between mt-2">
                        <div className="flex gap-2">
                          <img
                            src="../date_posted_icon.png"
                            alt=""
                            className="h-4 w-4"
                            style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                          />
                          <p className="text-xs text-gray-300">
                            Posted 1 week ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="h-8 w-30 bg-blue-500 text-black text-sm font-semibold rounded-xl"
                        onClick={() => saveDetails(internship)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">
                No Internships Available
              </p>
            )}
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Internships;
