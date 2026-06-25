import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
  targetRoles: {
    type: [String],
    required: [true],
  },
  summary: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    default: "https://ik.imagekit.io/priyanshu61103/profile-logo.png",
  },
  coverPhoto: {
    type: String,
    default: "https://ik.imagekit.io/priyanshu61103/job.png",
  },
  postedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
    },
  ],
  postedInternships: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const recruiterModel = await mongoose.model(
  "Recruiter",
  recruiterSchema,
);
