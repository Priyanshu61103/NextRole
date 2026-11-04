import fs from "fs";
import imageKit from "../config/imageKitConfig.js";
import pdfParse from "pdf-parse-fork";
import { applicantsModel } from "../models/applicantsModel.js";
import { studentModel } from "../models/studentModel.js";
import { analyzeResumeService } from "../services/resumeAnalysisService.js";
import { transport } from "../utils/nodemailer.js";
import { jobModel } from "../models/jobModel.js";
import mongoose from "mongoose";

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
        { $push: { appliedJobs: result._id } },
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
        { $push: { appliedInternships: result._id } },
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


export async function loadApplicationsController(req,resp){
    try{
       const { appliedJobs , appliedInternships } = req.body;
       console.log(appliedJobs);
       console.log(appliedInternships);
       const result = await jobModel.find({_id :{$in:appliedJobs}});
       console.log(result);
    }catch(error){
        console.log(error);
        return resp.status(500).send({message:"Internal Server Error",success:false});  
    }
}