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
      src: imageKitPath.filePath,
    });

    fs.unlink(imgFile.path, (error) => {
      console.log(error);
    });

    data.imageFile = url;
    const userName = data.userName;
    delete data.userName;
    const result = await jobModel.create(data);
    if (result) {
      const result2 = await recruiterModel.updateOne(
        { userName },
        { $addToSet: { postedJobs: result._id } },
      );
      if (result2) {
        return resp
          .status(200)
          .send({ message: "Job Data Added in Database", success: true });
      }
      return resp.status(500).send({
        message: "Job Data Not Added Correctly in Database",
        success: false,
      });
    }
    return resp
      .status(500)
      .send({ message: "Job Data Not Added in Database", success: false });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({ message: "Error Catched", success: false });
  }
}

export async function fetchJobDataController(req, resp) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const jobEligibility = req.body.jobEligibility;
    const skip = (page - 1) * limit;
    let totalJobs;
    if (
      !jobEligibility.experience ||
      (jobEligibility.experience && jobEligibility.experience != "+5")
    ) {
      if (!jobEligibility.ctc)
        totalJobs = await jobModel.countDocuments(jobEligibility);
      else {
        totalJobs = await jobModel.countDocuments({
          ...jobEligibility,
          ctc: {
            $gte: Number(jobEligibility.ctc),
            $lte: Number(jobEligibility.ctc) + 5,
          },
        });
      }
    } else {
      delete jobEligibility.experience;
      if (!jobEligibility.ctc) {
        totalJobs = await jobModel.countDocuments({
          ...jobEligibility,
          experience: { $gt: 5 },
        });
      } else {
        totalJobs = await jobModel.countDocuments({
          ...jobEligibility,
          experience: { $gt: 5 },
          ctc: {
            $gte: Number(jobEligibility.ctc),
            $lte: Number(jobEligibility.ctc) + 5,
          },
        });
      }
    }
    const totalPages = Math.ceil(totalJobs / limit);
    let jobData;
    if (!jobEligibility.experience || jobEligibility.experience != "5+") {
      if (!jobEligibility.ctc)
        jobData = await jobModel
          .find(jobEligibility)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit);
      else
        jobData = await jobModel
          .find({
            ...jobEligibility,
            ctc: {
              $gte: Number(jobEligibility.ctc),
              $lte: Number(jobEligibility.ctc) + 5,
            },
          })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit);
    } else if (!jobEligibility.ctc)
      jobData = await jobModel
        .find({ ...jobEligibility, experience: { $gt: 5 } })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    else
      jobData = await jobModel
        .find({
          ...jobEligibility,
          experience: { $gt: 5 },
          ctc: {
            $gte: Number(jobEligibility.ctc),
            $lte: Number(jobEligibility.ctc) + 5,
          },
        })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    if (jobData) {
      return resp.status(200).send({
        message: "Loaded Job Data Successfully",
        success: true,
        result: { jobData, totalJobs, totalPages },
      });
    }
    return resp
      .status(500)
      .send({ message: "Not Loaded Job Data", success: false });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
}
