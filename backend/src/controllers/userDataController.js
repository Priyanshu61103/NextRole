import { recruiterModel } from "../models/recruiterModel.js";
import { studentModel } from "../models/studentSchema.js";

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
