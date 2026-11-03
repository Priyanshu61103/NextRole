import fs from "fs";
import imageKit from "../config/imageKitConfig.js";
import { applicantsModel } from "../models/applicantsModel.js";
import { studentModel } from "../models/studentModel.js";
import { analyzeResumeService } from "../services/resumeAnalysisService.js";

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
    const resumeFile = await buffer.from(arrayBuffer);
    const parsedData = await pdfParse(resumeFile);
    const resumeText = parsedData.text;
    const resumeAnalysis = await analyzeResumeService(resumeText);
    data.atsScore = resumeAnalysis.overallScore;
     data.jobId = jobId;
    // console.log(data);

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
      return resp
        .status(200)
        .send({ message: "Application Filled", success: true });
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
      return resp
        .status(200)
        .send({ message: "Application Filled", success: true });
    }
  } catch (error) {
    return resp.status(500).send({ message: error, success: false });
  }
}
