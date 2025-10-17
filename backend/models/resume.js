// backend/models/Resume.js
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
