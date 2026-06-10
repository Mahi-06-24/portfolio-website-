import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: String,
    type: { type: String, default: 'Internship' },
    location: String,
    startDate: String,
    endDate: String,
    description: String,
    highlights: [String],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
