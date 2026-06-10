import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    degree: String,
    location: String,
    startDate: String,
    endDate: String,
    score: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Education', educationSchema);
