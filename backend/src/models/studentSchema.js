import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({ 
   email:{
      type:String,
      required:true,
      unique:true
   }, 
   userName:{
      type:String,
      required:true
   },
   user:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   },   
   firstName:{
      type:String,
      required:true
   },
   lastName:{
      type:String,
      required:true
   }, 
   mobileNumber:{
      type:String,
      required:true
   }, 
   cgpa:{
      type:String,
      required:true
   }, 
   resume:{
      type:String,
      required:true
   },  
   collegeName:{
      type:String,
      required:true
   },  
   specialization:{
      type:String,
      required:true
   }, 
   summary:{
      type:String,
      required:true
   }, 
   skills:{
      type:[String],
      required:[true]
   },
   yearsOfExperience:{
      type:String,
      required:true
   }, 
   yearOfGraduation:{
      type:String,
      required:true
   },
   profilePhoto:{
      type:String,
      default:"https://ik.imagekit.io/priyanshu61103/profile-logo.png"
   },
   appliedJobs:[{
      type:mongoose.Schema.Types.ObjectId,
      default:[]
   }],
   appliedInternships:[{
      type:mongoose.Schema.Types.ObjectId,
      default:[]
   }],
   createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const studentModel = await mongoose.model("Student",studentSchema);