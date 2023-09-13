import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONOG_URL as string);
  console.log("MONGO Connected");
};
