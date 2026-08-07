import { analyzeResumeService } from "../services/resumeAnalysisService.js";
import fs from "fs";
import pdfParse from "pdf-parse-fork";
export async function resumeAnalysisController(req, resp) {
  try {
    const resume = req.file;
    console.log(resume);
    if (!resume) {
      return resp
        .status(500)
        .send({ message: "Resume Not Attached", success: false });
    }
    const resumeFile = fs.readFileSync(resume.path);
    const parsedData = await pdfParse(resumeFile);
    const resumeText = parsedData.text;
    const result = await analyzeResumeService(resumeText);
    fs.unlink(resume.path, (error) => {
      console.log("Error:", error);
    });
    console.log("Result:", result);
    return resp.status(200).send({
      message: "Resume Analysis Successful",
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
}
