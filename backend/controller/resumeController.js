import Resume from "../models/resume.js";

export async function saveResume(req, res) {
  try {
    const resume = new Resume({
      userId: req.user.id,
      data: req.body, // expect the entire resume object
    });
    await resume.save();
    res.status(201).json({ message: "Resume saved successfully", resume });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listResumes(req, res) {
  try {
    const resumes = await Resume.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
