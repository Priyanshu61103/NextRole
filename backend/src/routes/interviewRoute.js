import express from "express";
import { interviewController } from "../controllers/interviewController.js";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";
import { aiInterviewResumeUpload } from "../config/multerConfig.js";

const interviewRoute = express.Router();

interviewRoute.post("/ai-interview-data",aiInterviewResumeUpload.single("resume"),jwtVerificationMiddleware,interviewController);

export default interviewRoute;