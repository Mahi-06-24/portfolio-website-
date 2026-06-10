import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProject } from '../api';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProject(id)
      .then(setProject)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
        <p className="text-white/60">{error || 'Project not found'}</p>
        <Link to="/" className="text-gold hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-gold"
        >
          <ArrowLeft size={16} />
          Back to Home Page
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass overflow-hidden"
        >
          <div className="flex h-64 items-center justify-center bg-gradient-to-br from-orange-500/20 via-gold/10 to-transparent md:h-80">
            <span className="text-8xl font-black text-gold/20">{project.title.charAt(0)}</span>
          </div>

          <div className="p-8 md:p-12">
            <p className="section-title mb-2">{project.category}</p>
            <h1 className="mb-2 text-4xl font-bold text-gold md:text-5xl">{project.title}</h1>
            <p className="mb-8 text-white/50">{project.date}</p>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-gold/50"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>

            <div className="mb-8">
              <h2 className="section-title mb-4">About The Project</h2>
              <p className="leading-relaxed text-white/70">{project.description}</p>
            </div>

            {project.features?.length > 0 && (
              <div className="mb-8">
                <h2 className="section-title mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-white/70">
                      <span className="text-gold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.achievement && (
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h2 className="section-title mb-3">Achievements</h2>
                <p className="text-white/80">{project.achievement}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
