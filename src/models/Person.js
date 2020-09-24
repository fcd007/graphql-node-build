import mongoose, { Schema } from "mongoose";

const Person = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Person", Person);
