import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

const dbConnection = async () => {
  try {
    await mongoose.connect(url,{
        dbName:"NextRole"
    });
    console.log("...Connected...");
  } catch (error) {
    console.log("Database Error",error);
    process.exit(1);
  }
};

export default dbConnection;
