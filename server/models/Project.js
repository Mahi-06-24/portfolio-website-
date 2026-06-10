import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: 'Web Application' },
    date: String,
    techStack: [String],
    description: String,
    features: [String],
    achievement: String,
    githubUrl: String,
    liveUrl: String,
    image: String,
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
