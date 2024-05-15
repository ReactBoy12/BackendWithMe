import mongoose, { mongo } from "mongoose";

import { DB_NAME } from "../../src/constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(
      `\n Mongodb connected !! DB HOST at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB connection is not fullfilled", error);
    process.exit(1);
  }
};
export default connectDB;
