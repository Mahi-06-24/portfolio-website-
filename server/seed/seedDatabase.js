import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Education from '../models/Education.js';
import Experience from '../models/Experience.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';
import {
  profileData,
  projectsData,
  educationData,
  experienceData,
  skillsData,
  certificationsData,
} from './portfolioData.js';

export async function seedDatabase(reset = false) {
  if (reset) {
    await Promise.all([
      Profile.deleteMany({}),
      Project.deleteMany({}),
      Education.deleteMany({}),
      Experience.deleteMany({}),
      Skill.deleteMany({}),
      Certification.deleteMany({}),
    ]);
  }

  await Profile.create(profileData);
  await Project.insertMany(projectsData);
  await Education.insertMany(educationData);
  await Experience.insertMany(experienceData);
  await Skill.insertMany(skillsData);
  await Certification.insertMany(certificationsData);
}

export async function ensureSeed() {
  const profileCount = await Profile.countDocuments();
  if (profileCount > 0) {
    console.log('Database already has portfolio data');
    return;
  }

  console.log('Seeding database for the first time...');
  await seedDatabase(false);
  console.log('Database seeded successfully');
}
