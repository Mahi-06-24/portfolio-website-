import { useEffect, useState } from 'react';
import {
  getProfile,
  getProjects,
  getEducation,
  getExperience,
  getSkills,
  getCertifications,
} from '../api';

export function usePortfolioData() {
  const [data, setData] = useState({
    profile: null,
    projects: [],
    education: [],
    experience: [],
    skills: [],
    certifications: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [profile, projects, education, experience, skills, certifications] =
          await Promise.all([
            getProfile(),
            getProjects(),
            getEducation(),
            getExperience(),
            getSkills(),
            getCertifications(),
          ]);
        setData({ profile, projects, education, experience, skills, certifications });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { ...data, loading, error };
}
