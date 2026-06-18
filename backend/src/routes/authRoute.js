import express from "express";
import { loginVerificationController, otpVerificationController, saveProfileController, signUpVerificationController } from "../controllers/authController.js";
import { resumeUpload } from "../config/multerConfig.js";
import { profileExistenceCheckingMiddleware } from "../middleware/profileExistenceCheckingMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signup-verification",profileExistenceCheckingMiddleware,signUpVerificationController);
authRouter.post("/otp-verification",otpVerificationController);
authRouter.post("/save-profile-details",resumeUpload.single("resumeFile"),saveProfileController);
authRouter.post("/login-verification",loginVerificationController);
export default authRouter;