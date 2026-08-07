import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    positionType: {
      type: String,
      required: true,
    },
    targetCompany: {
      type: String,
      required: true,
    },
    positionTitle: {
      type: String,
      required: true,
    },
    positionDescription: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    transcript: [
      {
        role: {
          type: String,
          enum: ["user", "assistant", "system"],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    finalFeedback: {
      score: Number,
      notes: String,
    },
    status:{
        type:String,
        enum:["initialized","in-progress","completed","abandoned"],
        required:true
    }
  },
  // Automatically adds createdAt and updatedAt
  { timestamps: true },
);

const interviewModel = mongoose.model("interviewData", interviewSchema);

export default interviewModel;
