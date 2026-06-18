import express from "express";
import { jobUpload } from "../config/multerConfig.js";
import { fetchJobDataController, postJobContoller } from "../controllers/jobController.js";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";

const jobRouter = express.Router();

jobRouter.post("/add-job-posting",jwtVerificationMiddleware,jobUpload.single("imageFile"),postJobContoller);
jobRouter.get("/fetch-job-data",jwtVerificationMiddleware,fetchJobDataController);
export default jobRouter;