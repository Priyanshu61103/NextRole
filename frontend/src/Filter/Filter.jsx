import React from "react";

const Filter = () => {
  return (
    <div className="flex gap-x-10">
      <div
        className="h-fit w-120 rounded-2xl border-2 border-blue-500 ml-15 p-10"
        style={{ backgroundColor: "rgb(20,20,20)" }}
      >
        <div className="flex justify-center">
          <h1 className="text-xl text-gray-300 font-semibold">Filters</h1>
        </div>
        <div>
          <div className="m-10">
            <label htmlFor="profile" className="text-lg text-gray-300">
              Profile
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="eg: Sales"
              id="profile"
              className="h-10 w-70 p-5 border-2 border-blue-400 rounded-xl placeholder:text-gray-300"
            />
          </div>

          <div className="m-10">
            <label htmlFor="Location" className="text-lg text-gray-300 mb-2">
              Location
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="eg: Delhi"
              id="Location"
              className="h-10 w-70 p-5 border-2 border-blue-400 rounded-xl placeholder:text-gray-300"
            />
          </div>

          <div className="m-10">
            <label htmlFor="experience" className="text-lg text-gray-300 mb-2">
              Years of Experience
            </label>
            <br />
            <br />
            <select
              name=""
              id="experience"
              className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200 pl-5"
            >
              <option
                value="-"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                Select Years of Experience
              </option>
              <option
                value="0"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                Fresher
              </option>
              <option
                value="1"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                1 Year
              </option>
              <option
                value="2"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                2 Years
              </option>
              <option
                value="3"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                3 Years
              </option>
              <option
                value="4"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                4 Years
              </option>
              <option
                value="5"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                5 Years
              </option>
              <option
                value="more"
                className="h-10 w-70 border-2 border-blue-400 rounded-xl text-gray-200"
                style={{ backgroundColor: "rgb(20,20,20)" }}
              >
                5+ Years
              </option>
            </select>
          </div>

          <div className="m-10">
            <label
              className="text-lg text-gray-300 mr-10 mb-2"
              htmlFor="salary"
            >
              Annual Salary (in lakhs)
            </label>
            <br />
            <br />
            <input type="range" id="salary" list="markers" className="w-50" />
            <datalist id="markers" className="w-50 flex justify-between">
              <option value="0" label="0"></option>
              <option value="20" label="2"></option>
              <option value="40" label="4"></option>
              <option value="60" label="6"></option>
              <option value="80" label="8"></option>
              <option value="100" label="10"></option>
            </datalist>
          </div>

          <div className="m-10 mb-2">
            <input type="checkbox" id="fulltime" className="mr-2" />
            <label htmlFor="fulltime" className="text-gray-300">
              Full-Time
            </label>
          </div>

          <div className="m-10 mt-2">
            <input type="checkbox" id="parttime" className="mr-2" />
            <label htmlFor="parttime" className="text-gray-300">
              Part-Time
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
