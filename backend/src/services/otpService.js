import otpModel from "../models/otpModel.js";
import { transport } from "../utils/nodemailer.js";

export async function otpGenerationService(email) {
  try {
    await otpModel.deleteMany({ email });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const result = await otpModel.create({ email, otp });
    if (result) {
      const mailOptions = {
        from: "NextRole",
        to: email,
        subject: "Otp Verification",
        text: `Your Otp for verification on NextRole is , ${otp}`,
      };

      await transport.sendMail(mailOptions);
      return true;
    } else {
      console.log("Otp Not Stored in Database");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function otpVerificationService(email, otp) {
  try {
    const result = await otpModel.find({ email });
    if (result.otp != otp) return false;
    else return true;
  } 
  catch (error) {
     console.log("Error Catched : ", error);
     return false;
  }
}
