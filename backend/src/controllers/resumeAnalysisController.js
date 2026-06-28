import { analyzeResumeService } from "../services/resumeAnalysisService.js";
import fs from "fs";

export async function resumeAnalysisController(req, resp) {
  try {
    const resume = req.file;
    if (resume) {  
          
      const result = await analyzeResumeService(resumeText);
      fs.unlink(resume.path,(error)=>{
        console.log(error);
      });
      return resp
        .status(200)
        .send({
          message: "Resume Analysis Successful",
          success: true,
          result,
        });
    }
    return resp
      .status(500)
      .send({ message: "Resume Analysis Unsuccessful", success: false });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
}
