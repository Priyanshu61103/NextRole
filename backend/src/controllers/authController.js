import imageKit from "../config/imageKitConfig.js";
import { studentModel } from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import {
  otpGenerationService,
  otpVerificationService,
} from "../services/otpService.js";
import bcrypt from "bcrypt";
import fs from "fs";
import { recruiterModel } from "../models/recruiterModel.js";
import { OAuth2Client } from "google-auth-library";

export async function signUpVerificationController(req, resp) {
  try {
    const { auth } = req.body;
    if (auth == "local") {
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
    } else {
      const { email } = req.data;
      return resp.status(200).send({
        message: "Google Auth Verifiation Successfull",
        success: true,
        email,
      });
    }
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
    if (data.user == "candidate") {
      let skillsArray = data.skills.split(",");
      data.skills = skillsArray;
      const result = await studentModel.create(data);
      if (result) {
        const payload = {
          userName: data.userName,
          user: data.user,
        };
        await jwt.sign(
          payload,
          process.env.JWT_SECRETKEY,
          { expiresIn: "10d" },
          (error, token) => {
            if (error)
              return resp
                .status(500)
                .send({
                  message: "User Account Not Created",
                  success: false,
                  error,
                });

            return resp.status(200).send({
              message: "User Account Created",
              success: true,
              token,
              payload,
            });
          },
        );
      }
    } else if (data.user == "recruiter") {
      let targetRolesArray = data.targetRoles.split(",");
      data.targetRoles = targetRolesArray;
      const result = await recruiterModel.create(data);
      if (result) {
        const payload = {
          userName: data.userName,
          user: data.user,
        };
        await jwt.sign(
          payload,
          process.env.JWT_SECRETKEY,
          { expiresIn: "10d" },
          (error, token) => {
            if (error)
              return resp
                .status(500)
                .send({
                  message: "User Account Not Created",
                  success: false,
                  error,
                });

            return resp.status(200).send({
              message: "User Account Created",
              success: true,
              token,
              payload,
            });
          },
        );
      }
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
    let email;
    if (data.user == "candidate") {
      if (data.auth == "google") {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
          idToken: data.token,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
        email = ticket.getPayload().email;
      } else {
        email = data.email;
      }

      const result = await studentModel.findOne({ email });
      if (result) {
        if (data.auth == "local") {
          let flag = false;
          flag = await bcrypt.compare(data.password, result.password);
          if (flag) {
            const name = result.firstName + " " + result.lastName;
            const payload = {
              name: name,
              userName: result.userName,
              user: result.user,
            };
            await jwt.sign(
              payload,
              process.env.JWT_SECRETKEY,
              {
                expiresIn: "10d",
              },
              (error, token) => {
                if (error)
                  return resp.status(200).send({
                    message: "User Account Not Verified",
                    success: false,
                    error,
                  });

                return resp.status(200).send({
                  message: "User Account Verified",
                  success: true,
                  payload,
                  token,
                });
              },
            );
          }
        } else if (data.auth == "google") {
          const name = result.firstName + " " + result.lastName;
          const payload = {
            name: name,
            userName: result.userName,
            user: result.user,
          };
          await jwt.sign(
            payload,
            process.env.JWT_SECRETKEY,
            {
              expiresIn: "10d",
            },
            (error, token) => {
              if (error)
                return resp.status(200).send({
                  message: "User Account Not Verified",
                  success: false,
                  error,
                });

              return resp.status(200).send({
                message: "User Account Verified",
                success: true,
                payload,
                token,
              });
            },
          );
        } else {
          return resp.status(500).send({
            message: "User Account Not Verified JWT fail",
            success: false,
          });
        }
      } else {
        return resp
          .status(500)
          .send({ message: "User Not Found", success: false });
      }
    } else if (data.user == "recruiter") {
      if (data.auth == "google") {
        const client = new OAuth2Client(process.env.GOOGLE_CLIEENT_ID);
        const ticket = await client.verifyIdToken({
          idToken: data.token,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
        email = ticket.getPayload().email;
      } else {
        email = data.email;
      }
      const result = await recruiterModel.findOne({ email: data.email });
      if (result) {
        if (data.auth == "local") {
          let flag = false;
          flag = await bcrypt.compare(data.password, result.password);
          if (flag) {
            const name = result.firstName + " " + result.lastName;
            const payload = {
              name: name,
              userName: result.userName,
              user: result.user,
            };
            await jwt.sign(
              payload,
              process.env.JWT_SECRETKEY,
              {
                expiresIn: "10d",
              },
              (error, token) => {
                if (error)
                  return resp.status(200).send({
                    message: "User Account Not Verified",
                    success: false,
                  });

                return resp.status(200).send({
                  message: "User Account Verified",
                  success: true,
                  payload,
                  token,
                });
              },
            );
          } else if (data.auth == "google") {
            const name = result.firstName + " " + result.lastName;
            const payload = {
              name: name,
              userName: result.userName,
              user: result.user,
            };
            await jwt.sign(
              payload,
              process.env.JWT_SECRETKEY,
              {
                expiresIn: "10d",
              },
              (error, token) => {
                if (error)
                  return resp.status(200).send({
                    message: "User Account Not Verified",
                    success: false,
                  });

                return resp.status(200).send({
                  message: "User Account Verified",
                  success: true,
                  payload,
                  token,
                });
              },
            );
          }
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
