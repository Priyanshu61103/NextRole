import fs from "fs";
import imageKit from "../config/imageKitConfig.js";
import pdfParse from "pdf-parse-fork";
import { applicantsModel } from "../models/applicantsModel.js";
import { studentModel } from "../models/studentModel.js";
import { analyzeResumeService } from "../services/resumeAnalysisService.js";
import { transport } from "../utils/nodemailer.js";
import { jobModel } from "../models/jobModel.js";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";
import { internshipModel } from "../models/internshipModel.js";

export async function applyController(req, resp) {
  try {
    const jobId = req.params.id;
    const data = req.body;
    const response = await fetch(data.resume);
    if (!response.ok) {
      return resp.status(500).send({
        message: "Error in Loading Resume From ImageKit",
        success: false,
      });
    }
    const arrayBuffer = await response.arrayBuffer();
    const resumeFile = Buffer.from(arrayBuffer);
    const parsedData = await pdfParse(resumeFile);
    const resumeText = parsedData.text;
    const resumeAnalysis = await analyzeResumeService(resumeText);
    data.atsScore = resumeAnalysis.overallScore;
    data.jobId = jobId;

    const result = await applicantsModel.create(data);
    if (!result) {
      return resp
        .status(500)
        .send({ message: "Application Not Filled", success: false });
    }
    if (data.mode == "job") {
      const result2 = await studentModel.updateOne(
        { email: data.email },
        { $push: { appliedJobs: data.jobId } },
      );
      if (!result2) {
        return resp
          .status(500)
          .send({ message: "Application Not Updated", success: false });
      }

      const mailOptions = {
        from: "NextRole",
        to: data.email,
        subject: "Application Sent",
        text: `Hello ${data.firstName} ${data.lastName} , your application has been sent to the company.Keep Applying 👍`,
      };

      transport.sendMail(mailOptions, (error) => {
        if (error) {
          return resp.status(500).send({ message: error, success: false });
        }
        return resp
          .status(200)
          .send({ message: "Application Filled", success: true });
      });
    } else {
      const result2 = await studentModel.updateOne(
        { email: data.email },
        { $push: { appliedInternships: data.jobId } },
      );
      if (!result2) {
        return resp
          .status(500)
          .send({ message: "Application Not Updated", success: false });
      }

      const mailOptions = {
        from: "NextRole",
        to: data.email,
        subject: "Application Sent",
        text: `Hello ${data.firstName} ${data.lastName} , your application has been sent to the company.Keep Applying 👍`,
      };

      transport.sendMail(mailOptions, (error) => {
        if (error) {
          return resp.status(500).send({ message: error, success: false });
        }
        return resp
          .status(200)
          .send({ message: "Application Filled", success: true });
      });
    }
  } catch (error) {
    return resp.status(500).send({ message: error, success: false });
  }
}

export async function loadApplicationsController(req, resp) {
  try {
    const { user } = req.body;
    if (user == "candidate") {
      const { appliedJobs, appliedInternships } = req.body;
      let appliedJobs2, appliedInternships2;
      appliedJobs2 = appliedJobs.map(
        (data) => new mongoose.Types.ObjectId(data),
      );
      appliedInternships2 = appliedInternships.map(
        (data) => new mongoose.Types.ObjectId(data),
      );
      const result = await jobModel
        .find({ _id: { $in: appliedJobs2 } })
        .sort({ createdAt: -1 });
      const result2 = await internshipModel
        .find({ _id: { $in: appliedInternships2 } })
        .sort({ createdAt: -1 });
      return resp.status(200).send({
        message: "Applications are Loaded Successfully",
        jobs: result,
        internships: result2,
        success: true,
      });
    } else {
      const { postedJobs, postedInternships } = req.body;
      let postedJobs2, postedInternships2;
      postedJobs2 = postedJobs.map((data) => new mongoose.Types.ObjectId(data));
      postedInternships2 = postedInternships.map(
        (data) => new mongoose.Types.ObjectId(data),
      );
      const result = await jobModel
        .find({ _id: { $in: postedJobs2 } })
        .sort({ createdAt: -1 });
      const result2 = await internshipModel
        .find({ _id: { $in: postedInternships2 } })
        .sort({ createdAt: -1 });
      return resp.status(200).send({
        message: "Applications are Loaded Successfully",
        jobs: result,
        internships: result2,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
}

export async function loadApplicantsController(req,resp){
   try{
      const { id } = req.params;
      const id2 = new mongoose.Types.ObjectId(id)
      const result = await applicantsModel.find({jobId : id2});
      if(!result) 
      return resp.status(400).send({message:"Applicants Data Not Loaded",success:false});
    
      return resp.status(200).send({message:"Applicants Data Loaded Successfully",result,success:true});
   }catch(error){
      console.log(error);
      return resp.status(500).send({message:"Internal Server Error",success:false});
   }
}