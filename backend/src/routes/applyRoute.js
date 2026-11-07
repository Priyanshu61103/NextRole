import express from "express";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";
import { resumeUpload } from "../config/multerConfig.js";
import { applyController, loadApplicantsController, loadApplicationsController } from "../controllers/applyController.js";

const applyRouter = express.Router();

applyRouter.post("/apply/:id",jwtVerificationMiddleware,applyController);
applyRouter.post("/load-applications",jwtVerificationMiddleware,loadApplicationsController);
applyRouter.get("/load-applicants/:id",jwtVerificationMiddleware,loadApplicantsController);
export default applyRouter;