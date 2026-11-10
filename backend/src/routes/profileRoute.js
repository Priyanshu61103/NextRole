import express from "express";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";
import { editProfileController, userDataByIdController, userDataController } from "../controllers/profileController.js";
import { editProfileUpload } from "../config/multerConfig.js";

const profileRouter = express.Router();

profileRouter.post("/fetch-user-data",jwtVerificationMiddleware,userDataController);
profileRouter.post("/fetch-user-data-by-id",jwtVerificationMiddleware,userDataByIdController);
profileRouter.put("/update-profile-data",jwtVerificationMiddleware,editProfileUpload.fields([{name:"profilePhoto",maxCount:1},{name:"coverPhoto",maxCount:1},{name:"resume",maxCount:1}]),editProfileController);

export default profileRouter;