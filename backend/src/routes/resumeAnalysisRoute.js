import express from "express";
import { resumeAnalysisController } from "../controllers/resumeAnalysisController.js";
import { resumeAnalysisUpload } from "../config/multerConfig.js";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";

const resumeAnalysisRouter = express.Router();

resumeAnalysisRouter.post("/analyze-resume",jwtVerificationMiddleware,resumeAnalysisUpload.single("resumeAnalysis"),resumeAnalysisController);

export default resumeAnalysisRouter;