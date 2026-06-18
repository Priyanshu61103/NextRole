import imageKit from "../config/imageKitConfig.js";
import { studentModel } from "../models/studentSchema.js";
import jwt from "jsonwebtoken";
import {
  otpGenerationService,
  otpVerificationService,
} from "../services/otpService.js";
import bcrypt from "bcrypt";
import fs from "fs";
import { recruiterModel } from "../models/recruiterModel.js";

export async function signUpVerificationController(req, resp) {
  try {
    const { email } = req.body;
    // 400 = Bad Request
    if (!email || !email.trim())
      return resp
        .status(400)
        .send({ message: "No Email ID Provided", success: false });
    const flag = await otpGenerationService(email);
    if (!flag)
      return resp
        .status(500)
        .send({ message: "Internal Server Error", success: false });
    else
      return resp
        .status(200)
        .send({ message: "Otp Sent on given Email Address", success: true });
  } catch (error) {
    console.log(error);
    resp.status(500).send({ message: "Error Catched", success: false });
  }
}

export async function otpVerificationController(req, resp) {
  try {
    const { email } = req.body;
    const { otp } = req.body;
    const flag = await otpVerificationService(email, otp);
    if (!flag) {
      return resp
        .status(500)
        .send({ message: "Otp is Invalid", success: false });
    }
    return resp
      .status(200)
      .send({ message: "Otp Verified Successfully", success: true });
  } catch (error) {
    console.log("Error Catched : ", error);
    return resp
      .status(500)
      .send({ message: "Internal Server Error", success: true });
  }
}

export async function saveProfileController(req, resp) {
  try {
    let data = req.body;
    const files = req.file;
    if (files) {
      const imageKitPath = await imageKit.files.upload({
        file: fs.createReadStream(files.path),
        fileName: files.originalname,
      });
      const url = imageKit.helper.buildSrc({
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
        src: imageKitPath.filePath,
      });
      fs.unlink(files.path, (error) => {
        console.log(error);
      });
      data["resume"] = url;
    }
    let userName = "@";
    for (let i = 0; i < 4 && i < data.firstName.length; i++) {
      userName += data.firstName[i].toLowerCase();
    }
    for (let i = 0; i < 4 && i < data.lastName.length; i++) {
      userName += data.lastName[i].toLowerCase();
    }
    for (let i = 0; i < 4 && i < data.mobileNumber.length; i++) {
      userName += data.mobileNumber[i];
    }
    data.userName = userName;
    const password = data.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;
    if (data.user == "student") {
      let skillsArray = data.skills.split(",");
      data.skills = skillsArray;
      const result = await studentModel.create(data);
      if (result) {
        const payload = {
          userName: data.userName,
          user: data.user,
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRETKEY, {
          expiresIn: "10d",
        });
        return resp.status(200).send({
          message: "User Account Created",
          success: true,
          token,
          payload,
        });
      }
      return resp
        .status(500)
        .send({ message: "User Acount Not Created", success: false });
    } else if (data.user == "recruiter") {
      let targetRolesArray = data.targetRoles.split(",");
      data.targetRoles = targetRolesArray;
      const result = await recruiterModel.create(data);
      if (result) {
        const payload = {
          userName: data.userName,
          user: data.user,
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRETKEY, {
          expiresIn: "10d",
        });
        return resp.status(200).send({
          message: "User Account Created",
          success: true,
          token,
          payload,
        });
      }
      return resp
        .status(500)
        .send({ message: "User Acount Not Created", success: false });
    } else {
      return resp
        .status(401)
        .send({ message: "User Not Found", success: false });
    }
  } catch (error) {
    console.log(error);
    return resp.status(500).send({ message: "Error Catched", success: false });
  }
}

export async function loginVerificationController(req, resp) {
  try {
    const data = req.body;
    if (data.user == "student") {
      const result = await studentModel.findOne({ email: data.email });
      if (result) {
        let flag = false;
        flag = await bcrypt.compare(data.password, result.password);
        if (flag) {
          const name = result.firstName + " " + result.lastName;
          const payload = {
            name: name,
            userName: result.userName,
            user: result.user,
          };
          const token = await jwt.sign(payload, process.env.JWT_SECRETKEY, {
            expiresIn: "10d",
          });
          return resp.status(200).send({
            message: "User Account Verified",
            success: true,
            payload,
            token,
          });
        } else {
          return resp
            .status(500)
            .send({ message: "User Account Not Verified", success: false });
        }
      } else {
        return resp
          .status(500)
          .send({ message: "User Account Not Verified", success: false });
      }
    } else if (data.user == "recruiter") {
      const result = await recruiterModel.findOne({ email: data.email });
      if (result) {
        let flag = false;
        flag = await bcrypt.compare(data.password, result.password);
        if (flag) {
          const name = result.firstName + " " + result.lastName;
          const payload = {
            name: name,
            userName: result.userName,
            user: result.user,
          };
          const token = await jwt.sign(payload, process.env.JWT_SECRETKEY, {
            expiresIn: "10d",
          });
          return resp.status(200).send({
            message: "User Account Verified",
            success: true,
            payload,
            token,
          });
        } else {
          return resp
            .status(500)
            .send({ message: "User Account Not Verified", success: false });
        }
      } else {
        return resp
          .status(500)
          .send({ message: "User Account Not Verified", success: false });
      }
    }else {
      return resp
        .status(401)
        .send({ message: "User Not Found", success: false });
    }
  } catch (error) {
    console.log(error);
    return resp.status(500).send({ message: "Error Catched", success: false });
  }
}
