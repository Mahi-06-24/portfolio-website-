import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Education from '../models/Education.js';
import Experience from '../models/Experience.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';

dotenv.config();

const profileData = {
  name: 'Mahimesh Mukherjee',
  title: 'Full Stack MERN Developer',
  tagline: 'Building scalable web applications with clean code & intuitive UI',
  location: 'Howrah, West Bengal',
  phone: '+91-6291365570',
  email: 'mahimeshmukherjee8@gmail.com',
  openToWork: true,
  summary:
    "I'm a recently graduated Full Stack Developer who loves transforming ideas into interactive digital experiences. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy bridging the gap between front-end user experience and back-end efficiency. Whether it's building seamless APIs or crafting responsive UIs, I enjoy every part of the development journey.",
  cvUrl: '/resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/mahimesh-mukherjee-149428212',
    github: '',
    email: 'mailto:mahimeshmukherjee8@gmail.com',
  },
};

const projectsData = [
  {
    title: 'Bank Transaction System',
    category: 'Full Stack Application',
    date: 'Jan 2025',
    techStack: ['MongoDB', 'Express', 'Node.js', 'JWT', 'bcrypt', 'NodeMailer'],
    description:
      'A secure full-stack banking transaction system with robust authentication and real-time email notifications.',
    features: [
      'JWT authentication with bcrypt password hashing',
      'RESTful APIs with middleware-based authorization',
      'NodeMailer integration for transaction notifications',
      'Environment variable management with dotenv',
      'Comprehensive error handling across all routes',
    ],
    achievement: 'Built a production-ready secure transaction flow with role-based access control.',
    githubUrl: '',
    liveUrl: '',
    image: '/projects/bank-transaction.jpg',
    featured: true,
    order: 1,
  },
  {
    title: 'Spotify Clone Backend',
    category: 'MERN Stack Application',
    date: 'Nov 2024',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Cloudinary'],
    description:
      'A scalable music streaming backend with admin controls, media storage, and role-based content management.',
    features: [
      'JWT authentication with role-based admin access',
      'RESTful APIs for artists, albums, and user libraries',
      'Cloudinary integration for audio and image storage',
      'MongoDB aggregation for efficient data queries',
      'Dedicated APIs for profiles and collections',
    ],
    achievement: 'Delivered a complete backend architecture supporting media upload and streaming workflows.',
    githubUrl: '',
    liveUrl: '',
    image: '/projects/spotify-clone.jpg',
    featured: true,
    order: 2,
  },
  {
    title: 'AI-Powered Text-to-Image Generator',
    category: 'Full Stack SaaS',
    date: 'Jan 2025',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI', 'Cloudinary'],
    description:
      'A full-stack AI SaaS application that converts user-entered text prompts into AI-generated images in real time.',
    features: [
      'OpenAI API integration for real-time image generation',
      'JWT authentication and secure API endpoints',
      'Cloudinary storage for generated images',
      'Prompt history management for users',
      'Responsive UI with seamless user experience',
    ],
    achievement: 'Designed and shipped a scalable AI SaaS product with cloud storage and secure APIs.',
    githubUrl: '',
    liveUrl: '',
    image: '/projects/ai-generator.jpg',
    featured: true,
    order: 3,
  },
];

const educationData = [
  {
    institution: 'Heritage Institute of Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Kolkata, West Bengal',
    startDate: 'Aug 2022',
    endDate: 'May 2025',
    score: 'CGPA: 6.69',
    order: 1,
  },
  {
    institution: 'Ramakrishna Mission Shilpamandira',
    degree: 'Diploma in Civil Engineering',
    location: 'Howrah, West Bengal',
    startDate: 'Jul 2019',
    endDate: 'Jul 2022',
    score: 'Percentage: 70.6%',
    order: 2,
  },
  {
    institution: 'Bantra Madhusudan Palchowdhury High School',
    degree: 'Senior Secondary (10+2), Science',
    location: 'Howrah, West Bengal',
    startDate: 'May 2016',
    endDate: 'Apr 2019',
    score: 'Percentage: 50%',
    order: 3,
  },
  {
    institution: 'Howrah Sree Ramakrishna Shikshalaya School',
    degree: 'Secondary Education (10th)',
    location: 'Howrah, West Bengal',
    startDate: 'May 2006',
    endDate: 'Apr 2016',
    score: 'Percentage: 64%',
    order: 4,
  },
];

const experienceData = [
  {
    company: 'CipherByte Technologies',
    role: 'Java Programmer',
    type: 'Virtual Training Program',
    location: 'Howrah, West Bengal',
    startDate: 'Jun 2024',
    endDate: 'Jul 2024',
    description:
      'Completed a virtual Java programming internship with hands-on project development and real-world problem solving.',
    highlights: [
      'Built an Online Examination System supporting 200+ simulated exams with timed quizzes and auto-evaluation',
      'Developed a Guess the Number Game in Java with real-time interactive feedback',
      'Used IntelliJ IDEA for development and debugging',
    ],
    order: 1,
  },
];

const skillsData = [
  { name: 'Java', category: 'Languages', proficiency: 85, order: 1 },
  { name: 'Python', category: 'Languages', proficiency: 75, order: 2 },
  { name: 'JavaScript', category: 'Languages', proficiency: 90, order: 3 },
  { name: 'React', category: 'Frontend', proficiency: 88, order: 4 },
  { name: 'HTML', category: 'Frontend', proficiency: 92, order: 5 },
  { name: 'CSS', category: 'Frontend', proficiency: 88, order: 6 },
  { name: 'Tailwind', category: 'Frontend', proficiency: 85, order: 7 },
  { name: 'Node.js', category: 'Backend', proficiency: 90, order: 8 },
  { name: 'Express.js', category: 'Backend', proficiency: 88, order: 9 },
  { name: 'MongoDB', category: 'Backend', proficiency: 85, order: 10 },
];

const certificationsData = [
  {
    title: 'Core Java',
    issuer: 'Internshala',
    date: '',
    credentialUrl: '',
    order: 1,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mahimesh-portfolio');
    console.log('Connected to MongoDB');

    await Promise.all([
      Profile.deleteMany({}),
      Project.deleteMany({}),
      Education.deleteMany({}),
      Experience.deleteMany({}),
      Skill.deleteMany({}),
      Certification.deleteMany({}),
    ]);

    await Profile.create(profileData);
    await Project.insertMany(projectsData);
    await Education.insertMany(educationData);
    await Experience.insertMany(experienceData);
    await Skill.insertMany(skillsData);
    await Certification.insertMany(certificationsData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
};

seed();
