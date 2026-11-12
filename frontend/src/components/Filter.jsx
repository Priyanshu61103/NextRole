import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterButton } from "../utils/redux/slice/filterButtonSlice/filterButtonSlice";

const Filter = () => {
  const filterButton = useSelector((state) => state.filterButton.value);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");

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
            <select
              name="profile"
              id="profile"
              onChange={(event) => {
                setProfile(event.target.value);
                const filterData = {
                  profile: event.target.value,
                  location,
                  experience,
                  salary,
                };
                dispatch(setFilterButton(filterData));
              }}
              className="p-2 border-2 border-blue-400 outline-0 text-gray-200 font-semibold"
            >
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value=""
              >
                Select Profile
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Software Developer"
              >
                Software Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Software Engineer"
              >
                Software Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Web Developer"
              >
                Web Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Data Analyst"
              >
                Data Analyst
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value=".NET Developer"
              >
                .NET Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Sales"
              >
                Sales
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Marketing"
              >
                Marketing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="3D Printing"
              >
                3D Printing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="AI Agents Developer"
              >
                AI Agents Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Accounting"
              >
                Accounting
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Actor"
              >
                Actor
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Aerospace Engineer"
              >
                Aerospace Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Agriculture and Food Engineer"
              >
                Agriculture and Food Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Analytics"
              >
                Analytics
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Anchor"
              >
                Anchor
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Android App Developer"
              >
                Android App Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Angular.js Developer"
              >
                Angular.js Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Animator"
              >
                Animator
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Architect"
              >
                Architect
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Artificial Intelligence(AI)"
              >
                Artificial Intelligence(AI)
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Frontend Developer"
              >
                Frontend Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Backend Developer"
              >
                Backend Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Banking"
              >
                Banking
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Computer Science"
              >
                Computer Science
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Engineering"
              >
                Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Engineering Design"
              >
                Engineering Design
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Cloud Computing"
              >
                Cloud Computing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Blockchain Developer"
              >
                Blockchain Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Blogger"
              >
                Blogger
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Brand Management"
              >
                Brand Management
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Business Developer"
              >
                Business Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Culinary Arts"
              >
                Culinary Arts
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Chartered Accountant"
              >
                Chartered Accountant(CA)
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Chemical Engineer"
              >
                Chemical Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Data Entry"
              >
                Data Entry
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Data Scientist"
              >
                Data Scientist
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="AI Engineer"
              >
                AI Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Auditor"
              >
                Auditor
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Copywriter"
              >
                Copywriter
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Flutter Developer"
              >
                Flutter Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Full Stack Developer"
              >
                Full Stack Developer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Fundraising"
              >
                Fundraising
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Game Designer"
              >
                Game Designer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mathematics"
              >
                Mathematics
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Biology"
              >
                Biology
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Big Data"
              >
                Big Data
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mechanical Engineer"
              >
                Mechanical Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Commerce"
              >
                Commerce
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Electrical Engineer"
              >
                Electrical Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Electric Vehicle"
              >
                Electric Vehicle
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Electronics Engineer"
              >
                Electronics Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Embedded Systems"
              >
                Embedded Systems
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Campus Ambassador"
              >
                Campus Ambassador
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Civil Engineer"
              >
                Civil Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Customer Service"
              >
                Customer Service
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Media"
              >
                Media
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Medicine"
              >
                Medicine
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Designer"
              >
                Designer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nutritionist"
              >
                Nutritionist
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Videographer"
              >
                Videographer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Cinematographer"
              >
                Cinematographer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Volunter"
              >
                Volunter
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Data Engineer"
              >
                Data Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Physicist"
              >
                Physicist
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Photographer"
              >
                Photographer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Pharmaceutical"
              >
                Pharmaceutical
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="E-commerce"
              >
                E-commerce
              </option>
            </select>
          </div>

          <div className="m-10">
            <label htmlFor="location" className="text-lg text-gray-300 mb-2">
              Location
            </label>
            <br />
            <br />
            <select
              id="location"
              name="location"
              onChange={(event) => {
                setLocation(event.target.value);
                const filterData = {
                  profile,
                  location: event.target.value,
                  experience,
                  salary,
                };
                dispatch(setFilterButton(filterData));
              }}
              className="min-w-72 p-2 border-2 border-blue-400 outline-0 text-gray-300 font-semibold"
            >
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value=""
              >
                Select Location
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Agartala"
              >
                Agartala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Agra"
              >
                Agra
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ahemdabad"
              >
                Ahemdabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ambala"
              >
                Ambala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Amritsar"
              >
                Amritsar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Andra"
              >
                Andra
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Andhra Pradesh"
              >
                Andhra Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Arunachal Pradesh"
              >
                Arunachal Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ayodhya"
              >
                Ayodhya
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Assam"
              >
                Assam
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Bengaluru"
              >
                Bengaluru
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Bhopal"
              >
                Bhopal
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Bhubaneswar"
              >
                Bhubaneswar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Bihar"
              >
                Bihar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Bikaner"
              >
                Bikaner
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Chandigarh"
              >
                Chandigarh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Chennai"
              >
                Chennai
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Chattisgarh"
              >
                Chattisgarh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Cuttack"
              >
                Cuttack
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Darjelling"
              >
                Darjelling
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Dehradun"
              >
                Dehradun
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Delhi"
              >
                Delhi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Durgapur"
              >
                Durgapur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Dwarka"
              >
                Dwarka
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="East"
              >
                East
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Faridabad"
              >
                Faridabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ghaziabad"
              >
                Ghaziabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Greater Noida"
              >
                Greater Noida
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Gurugram"
              >
                Gurugram
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Gorakhpur"
              >
                Gorakhur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Gwalior"
              >
                Gwalior
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Haridwar"
              >
                Haridwar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Haryana"
              >
                Haryana
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Himachal Pradesh"
              >
                Himachal Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Hubli"
              >
                Hubli
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Hyderabad"
              >
                Hyderabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Imphal"
              >
                Imphal
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Indore"
              >
                Indore
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Jaipur"
              >
                Jaipur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Jalandar"
              >
                Jalandar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Jhansi"
              >
                Jhansi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Jharkhand"
              >
                Jharkhand
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Jodhpur"
              >
                Jodhpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Kanpur"
              >
                Kanpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Karnataka"
              >
                Karnataka
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Kerala"
              >
                Kerala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Kochi"
              >
                Kochi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Kota"
              >
                Kota
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Krishna"
              >
                Krishna
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Lucknow"
              >
                Lucknow
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ludhiana"
              >
                Ludhiana
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mangalore"
              >
                Mangalore
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Madhya Pradesh"
              >
                Madhya Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="meerut"
              >
                Meerut
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mumbai"
              >
                Mumbai
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mysuru"
              >
                Mysuru
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Mizoram"
              >
                Mizoram
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nagaland"
              >
                Nagaland
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nagpur"
              >
                Nagpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nanital"
              >
                Nanital
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nalanda"
              >
                Nalanda
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Nala Soopara"
              >
                Nala Soopara
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="New Delhi"
              >
                New Delhi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Noida"
              >
                Noida
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Odisha"
              >
                Odisha
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Okhla"
              >
                Okhla
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Panipat"
              >
                Panipat
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Patna"
              >
                Patna
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Pitampura"
              >
                Pitampura
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Pune"
              >
                Pune
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Punjab"
              >
                Punjab
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Raipur"
              >
                Raipur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Ranchi"
              >
                Ranchi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Rishikesh"
              >
                Rishikesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Rohini"
              >
                Rohini
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Roorkee"
              >
                Roorkee
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Rourkela"
              >
                Rourkela
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Shillong"
              >
                Shillong
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Sikkim"
              >
                Sikkim
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Srinagar"
              >
                Srinagar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Surat"
              >
                Surat
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Tamil nadu"
              >
                Tamil Nadu
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Trichy"
              >
                Trichy
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Tripura"
              >
                Tripura
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Uttarakhand"
              >
                Uttarakhand
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Uttar pradesh"
              >
                Uttar Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Vadodara"
              >
                Vadodara
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Varanasi"
              >
                Varanasi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Vellore"
              >
                Vellore
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="West Bengal"
              >
                West Bengal
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="Yamuna Nagar"
              >
                Yamuna Nagar
              </option>
            </select>
          </div>

          <div className="m-10">
            <label htmlFor="experience" className="text-lg text-gray-300 mb-2">
              Years of Experience
            </label>
            <br />
            <br />
            <select
              name="experience"
              id="experience"
              onChange={(event) => {
                setExperience(event.target.value);
                const filterData = {
                  profile,
                  location,
                  experience: event.target.value,
                  salary,
                };
                dispatch(setFilterButton(filterData));
              }}
              className="p-2 min-w-72 border-2 border-blue-400 outline-0 text-gray-300 font-semibold pl-5"
            >
              <option
                value=""
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                Select Years of Experience
              </option>
              <option
                value="0"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                Fresher
              </option>
              <option
                value="1"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                1 Year
              </option>
              <option
                value="2"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                2 Years
              </option>
              <option
                value="3"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                3 Years
              </option>
              <option
                value="4"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                4 Years
              </option>
              <option
                value="5"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
              >
                5 Years
              </option>
              <option
                value="5+"
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
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
            <input
              type="range"
              id="salary"
              value={salary}
              list="markers"
              className="w-60"
              onChange={(event) => {
                console.log(event.target.value);
                setSalary(event.target.value);
                const filterData = {
                  profile,
                  location,
                  experience,
                  salary: event.target.value,
                };
                dispatch(setFilterButton(filterData));
              }}
            />
            <datalist
              id="markers"
              name="markers"
              className="w-60 flex justify-between"
            >
              <option value="0" label="0"></option>
              <option value="20" label="20"></option>
              <option value="40" label="40"></option>
              <option value="60" label="60"></option>
              <option value="80" label="80"></option>
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
