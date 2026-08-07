import fs from "fs";
import pdfParse from "pdf-parse-fork";
import interviewModel from "../models/interviewModel.js";
export async function interviewController(req, resp) {
  try {
    const userData = req.body;
    const resume = req.file;
    if (!resume) {
      return resp.status(500).send({ message: "Resume Not Found", success: false });
    }
    const resumeFile = fs.readFileSync(resume.path);
    const parsedResume = await pdfParse(resumeFile);
    const resumeText = parsedResume.text;
    userData["resume"] = resumeText;
    fs.unlink(resume.path,(error)=>{
       console.log(error); 
    });
    const result = await interviewModel.create({
       user:userData.userName,
       positionType:userData.type,
       resume:resumeText,
       targetCompany:userData.targetCompany,
       positionTitle:userData.title,
       positionDescription:userData.description,
       transcript:[],
       status:"initialized"
    });

    if(result){
       return resp.status(200).send({message:"Interview is Starting...",success:true,sessionId:result._id}); 
    }
    return resp.status(400).send({message:"Interview Not Started",success:false});
    
  } catch (error) {
       console.log(error);
       return resp.status(500).send({message:"Internal Server Error",success:false});
  }
}
