import "dotenv/config";
import express from "express";
import dbConnection from "./src/config/dbConfig.js";
import cors from "cors";
import authRouter from "./src/routes/authRoute.js";
import jobRouter from "./src/routes/jobRoute.js";
import internshipRouter from "./src/routes/internshipRoute.js";
import cookieParser from "cookie-parser";
import profileRouter from "./src/routes/profileRoute.js";
import resumeAnalysisRouter from "./src/routes/resumeAnalysisRoute.js";

const app = express(); 
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

await dbConnection();
app.use(authRouter);
app.use(jobRouter);
app.use(internshipRouter);
app.use(profileRouter);
app.use(resumeAnalysisRouter);
app.listen(PORT,()=>{
    console.log("Server is running on Port",PORT);
});