import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    tagline: String,
    location: String,
    phone: String,
    email: String,
    openToWork: { type: Boolean, default: true },
    summary: String,
    cvUrl: String,
    socialLinks: {
      linkedin: String,
      github: String,
      email: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Profile', profileSchema);
