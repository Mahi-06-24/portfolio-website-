import { Router } from 'express';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Education from '../models/Education.js';
import Experience from '../models/Experience.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';

const router = Router();

router.get('/profile', async (_req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/projects', async (_req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/education', async (_req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/experience', async (_req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/skills', async (_req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/certifications', async (_req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: 1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
