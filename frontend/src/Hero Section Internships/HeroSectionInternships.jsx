import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDetails } from "../Redux/Slice/detailSlice/detailSlice";

const HeroSectionInternships = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const details = useSelector((state) => state.details.value);
  const button = useSelector((state) => state.button.value);
  const [counter1, setCounter1] = useState(0);
  const [internshipData, setInternshipData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchInternshipData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3200/fetch-internship-data",
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!response) {
        return;
      }

      const data = await response.json();

      if (data.success) {
        setInternshipData(data.result);
        return;
      }
      console.log(data.message);
      alert("Job Data Not Loaded");
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
    <div>
      <div>
        <h1 className="text-4xl font-semibold mt-10 mb-2 ml-15 text-gray-300">
          Internships
        </h1>
        <p className="text-sm text-gray-300 ml-15 mb-5">
          Find the Internships that fit your career aspirations.
        </p>
        <div className="w-full h-70 flex gap-x-4 items-center mx-5">
          <button
            onClick={() => {
              if (counter1 > 0) setCounter1(counter1 - 1);
            }}
          >
            <img src="less_than_icon.png" alt="" className="h-5 w-3" />
          </button>

          {internshipData.length > 0 ? (
            internshipData.map((job, index) => (
              <div
                className={
                  index <= counter1 + 3 && index >= counter1
                    ? "h-60 w-75 rounded-xl border-2 border-blue-500 p-5"
                    : "hidden"
                }
                style={{ backgroundColor: "rgb(20, 20 , 20)" }}
              >
                <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                  <img src="../target_icon.png" alt="" className="h-7 w-7" />
                  <h1 className="text-xs text-blue-200">Actively Hiring</h1>
                </div>
                <div className="w-fit h-20 flex mt-1">
                  <div>
                    <h1 className="text-lg font-semibold text-gray-300 mt-2">
                      {job.title}
                    </h1>
                    <h2 className="text-sm text-gray-300 mt-1">
                      {job.company}
                    </h2>
                  </div>
                  <div>
                    <img
                      src={job.imageFile}
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-2">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">{job.location}</p>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-2">
                    <img
                      src="../date_posted_icon.png"
                      alt=""
                      className="h-4 w-4"
                      style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                    />
                    <p className="text-xs text-gray-300">Posted 1 week ago</p>
                  </div>
                  <div>
                    <button
                      onClick={() => saveDetails(job)}
                      className="h-8 w-25 bg-blue-500 text-black text-sm font-semibold rounded-xl relative bottom-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No Jobs Available</p>
          )}
          <button
            onClick={() => {
              if (counter1 < internshipData.length - 4)
                setCounter1(counter1 + 1);
            }}
          >
            <img src="more_than_icon.png" alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionInternships;
