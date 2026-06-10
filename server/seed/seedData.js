import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { seedDatabase } from './seedDatabase.js';

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mahimesh-portfolio');
    console.log('Connected to MongoDB');

    await seedDatabase(true);
    console.log('Database reset and seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
};

run();
