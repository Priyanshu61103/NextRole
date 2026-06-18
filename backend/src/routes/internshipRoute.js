import express from "express";
import { internshipUpload } from "../config/multerConfig.js";
import { postInternshipContoller } from "../controllers/internshipController.js";
import { fetchIntenshipDataController } from "../controllers/internshipController.js";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";

const internshipRouter = express.Router();

internshipRouter.post("/add-internship-posting",jwtVerificationMiddleware,internshipUpload.single("imageFile"),postInternshipContoller);
internshipRouter.get("/fetch-internship-data",jwtVerificationMiddleware,fetchIntenshipDataController);
export default internshipRouter;