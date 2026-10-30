import express from "express";
import { studentModel } from "../models/studentModel.js";
import { recruiterModel } from "../models/recruiterModel.js";
import { OAuth2Client } from "google-auth-library";

export async function profileExistenceCheckingMiddleware(req, resp, next) {
  let data = req.body;
  if (data.auth == "local") {
    const result = await studentModel.findOne({ email: data.email });
    if (result) {
      return resp.status(200).send({
        message: "User Account Already Exists in Database",
        success: true,
      });
    }

    const result2 = await recruiterModel.findOne({ email: data.email });
    if (result2) {
      return resp.status(200).send({
        message: "User Account Already Exists in Database",
        success: true,
      });
    }
  } else {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    console.log(req.body);
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, name } = ticket.getPayload();
    const result = await studentModel.findOne({ email });
    if (result) {
      return resp.status(200).send({
        message: "User Account Already Exists in Database",
        success: true,
      });
    }

    const result2 = await recruiterModel.findOne({ email });
    if (result2) {
      return resp.status(200).send({
        message: "User Account Already Exists in Database",
        success: true,
      });
    }
    req.data = {email,name};
  }
  next();
}
