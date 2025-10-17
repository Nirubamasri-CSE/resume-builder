// backend/routes/resumeRoutes.js
import express from "express";
import Resume from "../models/Resume.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Get all resumes for logged-in user
router.get("/list", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const resumes = await Resume.find({ user: userId }).sort({ createdAt: -1 });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

// Save a resume
router.post("/save", verifyToken, async (req, res) => {
  try {
    const newResume = new Resume({
      user: req.user.id,
      data: req.body,
    });
    await newResume.save();
    res.json({ message: "Resume saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save resume" });
  }
});

export default router;
