import express from "express";
import { jwtVerificationMiddleware } from "../middleware/jwtVerificationMiddleware.js";
import { userDataController } from "../controllers/userDataController.js";

const userDataRouter = express.Router();

userDataRouter.post("/fetch-user-data",jwtVerificationMiddleware,userDataController);

export default userDataRouter;