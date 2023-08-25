import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {
  const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fyind2j.mongodb.net/`;

  mongoose.connect(MONGO_URL, { useNewUrlParser: true });
};

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database connection: " + err);
  }
});

export default Connection;
