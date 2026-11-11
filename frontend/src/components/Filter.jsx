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
            <select
              type="text"
              placeholder="eg: Sales"
              id="profile"
              className="h-10 w-70 p-5 border-2 border-blue-400 outline-0 placeholder:text-gray-300"
            >
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="web-development"
              >
                Web Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="data-analyst"
              >
                Data Analyst
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value=".net-development"
              >
                .NET Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="sales"
              >
                Sales
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="marketing"
              >
                Marketing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="3d-printing"
              >
                3D Printing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ai-agents-development"
              >
                AI Agents Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="accounting"
              >
                Accounting
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="acting"
              >
                Acting
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="aerospace-engineering"
              >
                Aerospace Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="agriculture-and-food-engineering"
              >
                Agriculture and Food Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="analytics"
              >
                Analytics
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="anchoring"
              >
                Anchoring
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="android-app-development"
              >
                Android App Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="angular-js-development"
              >
                Angular.js Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="animation"
              >
                Animation
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="architecture"
              >
                Architecture
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="artificial-intelligence"
              >
                Artificial Intelligence(AI)
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="frontend-development"
              >
                Frontend Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="backend-development"
              >
                Backend Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="banking"
              >
                Banking
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="computer-science"
              >
                Computer Science
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="engineering"
              >
                Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="engineering-design"
              >
                Engineering Design
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="cloud-computing"
              >
                Cloud Computing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="blockchain-development"
              >
                Blockchain Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="blogging"
              >
                Blogging
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="brand-management"
              >
                Brand Management
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="business-development"
              >
                Business Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="culinary-arts"
              >
                Culinary Arts
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="chartened-accountant"
              >
                Chartened Accountant(CA)
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="chemical-engineering"
              >
                Chemical Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="data-entry"
              >
                Data Entry
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="data-science"
              >
                Data Science
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ai-engineer"
              >
                AI Engineer
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="auditing"
              >
                Auditing
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="copywriting"
              >
                Copywriting
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="flutter-development"
              >
                Flutter Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="full-stack-development"
              >
                Full Stack Development
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="fundraising"
              >
                Fundraising
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="game-design"
              >
                Game Design
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="mathematics"
              >
                Mathematics
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="anchoring"
              >
                Anchoring
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="biology"
              >
                Biology
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="big-data"
              >
                Big Data
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="mechanical-engineering"
              >
                Mechanical Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="commerce"
              >
                Commerce
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="electrical-engineering"
              >
                Electrical Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="electric-vehicle"
              >
                Electric Vehicle
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="electronics-engineering"
              >
                Electronics Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="embedded-systems"
              >
                Embedded Systems
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="campus-ambassador"
              >
                Campus Ambassador
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="civil-engineering"
              >
                Civil Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="customer-service"
              >
                Customer Service
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="media"
              >
                Media
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="medicine"
              >
                Medicine
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="design"
              >
                Design
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nutrition"
              >
                Nutrition
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="videography"
              >
                Videography
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="cinematography"
              >
                Cinematography
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="voluntering"
              >
                Voluntering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="data-engineering"
              >
                Data Engineering
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="physics"
              >
                Physics
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="photography"
              >
                Photography
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="pharmaceutical"
              >
                Pharmaceutical
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="architecture"
              >
                Architecture
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="e-commerce"
              >
                E-commerce
              </option>
            </select>
          </div>

          <div className="m-10">
            <label htmlFor="Location" className="text-lg text-gray-300 mb-2">
              Location
            </label>
            <br />
            <br />
            <select
              type="text"
              placeholder="eg: Delhi"
              id="Location"
              className="h-10 w-70 p-5 border-2 border-blue-400 rounded-xl placeholder:text-gray-300"
            >
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="agartala"
              >
                Agartala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="agra"
              >
                Agra
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ahemdabad"
              >
                Ahemdabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ambala"
              >
                Ambala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="amritsar"
              >
                Amritsar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="andra"
              >
                Andra
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="andhra-pradesh"
              >
                Andhra Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="arunachal-pradesh"
              >
                Arunachal Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ayodhya"
              >
                Ayodhya
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="assam"
              >
                Assam
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="bangaluru"
              >
                Bengaluru
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="bhopal"
              >
                Bhopal
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="bhubaneswar"
              >
                Bhubaneswar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="bihar"
              >
                Bihar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="bikaner"
              >
                Bikaner
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="chandigarh"
              >
                Chandigarh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="chennai"
              >
                Chennai
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="chattisgarh"
              >
                Chattisgarh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="cuttack"
              >
                Cuttack
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="darjelling"
              >
                Darjelling
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="dehradun"
              >
                Dehradun
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="delhi"
              >
                Delhi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="durgapur"
              >
                Durgapur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="dwarka"
              >
                Dwarka
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="east"
              >
                East
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="faridabad"
              >
                Faridabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ghaziabad"
              >
                Ghaziabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="greater-noida"
              >
                Greater Noida
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="data-science"
              >
                Data Science
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="gurgaon"
              >
                Gurgaon
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="gorakhpur"
              >
                Gorakhur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="gwalior"
              >
                Gwalior
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="haridwar"
              >
                Haridwar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="haryana"
              >
                Haryana
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="himachal-pradesh"
              >
                Himachal Pradesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="hubli"
              >
                Hubli
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="hyderabad"
              >
                Hyderabad
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="imphal"
              >
                Imphal
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="indore"
              >
                Indore
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="jaipur"
              >
                Jaipur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="jalandar"
              >
                Jalandar
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="jhansi"
              >
                Jhansi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="jharkhand"
              >
                Jharkhand
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="jodhpur"
              >
                Jodhpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="kanpur"
              >
                Kanpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="karnataka"
              >
                Karnataka
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="kerala"
              >
                Kerala
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="kochi"
              >
                Kochi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="kota"
              >
                Kota
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="krishna"
              >
                Krishna
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="lucknow"
              >
                Lucknow
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ludhiana"
              >
                Ludhiana
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="mangalore"
              >
                Mangalore
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="madhya-pradesh"
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
                value="mumbai"
              >
                Mumbai
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="mysuru"
              >
                Mysuru
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="mizoram"
              >
                Mizoram
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nagaland"
              >
                Nagaland
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nagpur"
              >
                Nagpur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nanital"
              >
                Nanital
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nalanda"
              >
                Nalanda
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="nala-soopara"
              >
                Nala Soopara
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="new-delhi"
              >
                New Delhi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="noida"
              >
                Noida
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="odisha"
              >
                odisha
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="okhla"
              >
                okhla
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="panipat"
              >
                okhla
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="panipat"
              >
                Panipat
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="patna"
              >
                Patna
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="pitampura"
              >
                Pitampura
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="pune"
              >
                Pune
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="punjab"
              >
                Punjab
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="raipur"
              >
                Raipur
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="ranchi"
              >
                Ranchi
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="rishikesh"
              >
                Rishikesh
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="rohini"
              >
                Rohini
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="roorkee"
              >
                Roorkee
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="rourkela"
              >
                Rourkela
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="patna"
              >
                Patna
              </option>
              <option
                className="text-blue-600 font-semibold bg-[rgb(25,25,25)]"
                value="patna"
              >
                Patna
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
        </div>
      </div>
    </div>
  );
};

export default Filter;
