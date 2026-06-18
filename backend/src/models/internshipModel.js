import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  numberOfOpenings: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
    required: true,
  },
  modeOfInternship: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  applyBy: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  imageFile: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const internshipModel = await mongoose.model("Interenships", internshipSchema);