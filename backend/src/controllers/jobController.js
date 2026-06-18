import imageKit from "../config/imageKitConfig.js";
import fs from "fs";
import { jobModel } from "../models/jobModel.js";
import { recruiterModel } from "../models/recruiterModel.js";

export async function postJobContoller(req, resp) {
  try {
    const data = req.body;
    const imgFile = req.file;

    const imageKitPath = await imageKit.files.upload({
      file: fs.createReadStream(imgFile.path),
      fileName: imgFile.originalname,
    });

    const url = imageKit.helper.buildSrc({
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      src: imageKitPath.filePath ,
    });

    fs.unlink(imgFile.path,(error)=>{
        console.log(error);
    });
 
    data.imageFile = url;
    const userName = data.userName;
    delete data.userName;
    const result = await jobModel.create(data);
    if(result){
        const result2 = await recruiterModel.updateOne({userName},{$addToSet:{postedJobs:result._id}});
        if(result2){
          return resp.status(200).send({message:"Job Data Added in Database",success:true});
        }
        return resp.status(500).send({message:"Job Data Not Added Correctly in Database",success:false});
    }
    return resp.status(500).send({message:"Job Data Not Added in Database",success:false});
  } catch (error) {
      console.log(error);
      return resp.status(500).send({message:"Error Catched",success:false}); 
  }
}

export async function fetchJobDataController(req,resp){
   try{
      const result = await jobModel.find();
      if(result){
         return resp.status(200).send({message:"Loaded Job Data Successfully",success:true,result});
      } 
      return resp.status(500).send({message:"Not Loaded Job Data",success:false});
   }catch(error){
       console.log(error);
       return resp.status(500).send({message:"Internal Server Error",success:false});
   } 
}
