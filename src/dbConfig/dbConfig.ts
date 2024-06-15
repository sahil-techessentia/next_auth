import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URL! + process.env.DB_NAME);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong to connect db");
    console.log(error);
  }
}
