import multer from "multer";
import path from "path";

const storage = (location) => {
  const filePath = path.join(path.resolve("src", "uploads"), location);
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, filePath);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
};

export const resumeUpload = multer({ storage: storage("resume") });
export const jobUpload = multer({ storage: storage("job-logo") });
export const internshipUpload = multer({ storage: storage("internship-logo") });
export const editProfileUpload = multer({ storage: storage("edit-profile") });
export const resumeAnalysisUpload = multer({ storage: storage("resume-analysis") });
export const aiInterviewResumeUpload = multer({ storage: storage("ai-interview-resume")});
