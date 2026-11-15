import imageKit from "../config/imageKitConfig.js";
import fs from "fs";
import { internshipModel } from "../models/internshipModel.js";
import { recruiterModel } from "../models/recruiterModel.js";

export async function postInternshipContoller(req, resp) {
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
    const result = await internshipModel.create(data);
    if (result) {
      const result2 = await recruiterModel.updateOne(
        { userName },
        { $addToSet: { postedInternships: result._id } },
      );
      if (result2) {
        return resp
          .status(200)
          .send({ message: "Internship Data Added in Database", success: true });
      }
      return resp
        .status(500)
        .send({
          message: "Internship Data Not Added Correctly in Database",
          success: false,
        });
    }
    return resp
      .status(500)
      .send({
        message: "Internship Data Not Added in Database",
        success: false,
      });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({ message: "Error Catched", success: false });
  }
}

export async function fetchIntenshipDataController(req, resp) {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const internshipEligibility = req.body.internshipEligibility;
      const skip = (page - 1) * limit;
      let totalInternships;
      if (
        !internshipEligibility.experience ||
        (internshipEligibility.experience && internshipEligibility.experience != "+5")
      ) {
        if (!internshipEligibility.stipend)
          totalInternships = await internshipModel.countDocuments(internshipEligibility);
        else {
          totalInternships = await internshipModel.countDocuments({
            ...internshipEligibility,
            stipend: {
              $gte: Number(internshipEligibility.stipend),
              $lte: Number(internshipEligibility.stipend) + 5,
            },
          });
        }
      } else {
        delete internshipEligibility.experience;
        if (!internshipEligibility.stipend) {
          totalInternships = await internshipModel.countDocuments({
            ...internshipEligibility,
            experience: { $gt: 5 },
          });
        } else {
          totalInternships = await internshipModel.countDocuments({
            ...internshipEligibility,
            experience: { $gt: 5 },
            stipend: {
              $gte: Number(internshipEligibility.stipend),
              $lte: Number(internshipEligibility.stipend) + 5,
            },
          });
        }
      }
      const totalPages = Math.ceil(totalInternships / limit);
      let internshipData;
      if (!internshipEligibility.experience || internshipEligibility.experience != "5+") {
        if (!internshipEligibility.stipend)
          internshipData = await internshipModel
            .find(internshipEligibility)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        else
          internshipData = await internshipModel
            .find({
              ...internshipEligibility,
              stipend: {
                $gte: Number(internshipEligibility.stipend),
                $lte: Number(internshipEligibility.stipend) + 5,
              },
            })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
      } else if (!internshipEligibility.stipend)
        internshipData = await internshipModel
          .find({ ...internshipEligibility, experience: { $gt: 5 } })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit);
      else
        internshipData = await internshipModel
          .find({
            ...internshipEligibility,
            experience: { $gt: 5 },
            stipend: {
              $gte: Number(internshipEligibility.stipend),
              $lte: Number(internshipEligibility.stipend) + 5,
            },
          })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit);
      if (internshipData) {
        return resp.status(200).send({
          message: "Loaded Internship Data Successfully",
          success: true,
          result: { internshipData, totalInternships, totalPages },
        });
      }
      return resp
        .status(500)
        .send({ message: "Not Loaded Internship Data", success: false });
    } catch (error) {
      console.log(error);
      return resp
        .status(500)
        .send({ message: "Internal Server Error", success: false });
    }
}
