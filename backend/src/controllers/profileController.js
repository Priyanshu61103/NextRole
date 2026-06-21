import imageKit from "../config/imageKitConfig.js";
import { recruiterModel } from "../models/recruiterModel.js";
import { studentModel } from "../models/studentSchema.js";
import fs from "fs";

export async function userDataController(req, resp) {
  try {
    const { userName } = req.body;
    const { user } = req.body;
    if (user == "student") {
      const result = await studentModel.findOne({ userName });
      if (result) {
        return resp
          .status(200)
          .send({
            message: "User Data Fetched From Database",
            success: true,
            result,
          });
      }
      return resp
        .status(500)
        .send({
          message: "User Data Not Fetched From Database",
          success: false,
        });
    } else if (user == "recruiter") {
      const result = await recruiterModel.findOne({ userName });
      if (result) {
        return resp
          .status(200)
          .send({
            message: "User Data Fetched From Database",
            success: true,
            result,
          });
      }
      return resp
        .status(500)
        .send({
          message: "User Data Not Fetched From Database",
          success: false,
        });
    }
    return resp
      .status(500)
      .send({ message: "User Data Not Fetched From Database", success: false });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .send({ message: "User Data Not Fetched From Database", success: false });
  }
}

export async function editProfileController(req,resp){
   try{
      const data = req.body;
      const files = req.files;
      if(!("resume" in data)){
         const resume = files.resume[0];
         const imageKitPath = await imageKit.files.upload({
            file:fs.createReadStream(resume.path),
            fileName:resume.originalname
         });  


         const url = imageKit.helper.buildSrc({
            urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
            src:imageKitPath.filePath
         });

         fs.unlink(resume.path,(error)=>{
           console.log(error);
         })

         data.resume = url;
      }
      if(!("profilePhoto" in data)){
         const profilePhoto = files.profilePhoto[0];
         const imageKitPath = await imageKit.files.upload({
            file:fs.createReadStream(profilePhoto.path),
            fileName:profilePhoto.originalname
         });  


         const url = imageKit.helper.buildSrc({
            urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
            src:imageKitPath.filePath
         });

         fs.unlink(profilePhoto.path,(error)=>{
           console.log(error);
         })
         
         data.profilePhoto = url;
      }
      if(!("coverPhoto" in data)){
         const coverPhoto = files.coverPhoto[0];
         const imageKitPath = await imageKit.files.upload({
            file:fs.createReadStream(coverPhoto.path),
            fileName:coverPhoto.originalname
         });  


         const url = imageKit.helper.buildSrc({
            urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
            src:imageKitPath.filePath
         });

         fs.unlink(coverPhoto.path,(error)=>{
           console.log(error);
         })
         
         data.coverPhoto = url;
      }
      let skillsArray = data.skills.split(",");
      data.skills = skillsArray; 
      const result = await studentModel.updateOne({userName:data.userName},data);
      if(result){
         return resp.status(200).send({message:"Profile Data Updated in Database",success:true});
      }
      return resp.status(500).send({message:"Profile Data Not Updated in Database",success:false});
   }catch(error){ 
       console.log(error);
       return resp.status(200).send({message:"Internal Server Error",success:false});
   }
}