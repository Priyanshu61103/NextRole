import express from "express";
import { studentModel } from "../models/studentSchema.js";
import { recruiterModel } from "../models/recruiterModel.js";

export async function profileExistenceCheckingMiddleware(req, resp, next) {
  let data = req.body;

  const result = await studentModel.findOne({ email: data.email });
  if (result) {
    return resp
      .status(200)
      .send({
        message: "User Account Already Exists in Database",
        success: true,
      });
  }

  const result2 = await recruiterModel.findOne({ email: data.email });
  if (result2) {
    return resp
      .status(200)
      .send({
        message: "User Account Already Exists in Database",
        success: true,
      });
  }
  next();
}
