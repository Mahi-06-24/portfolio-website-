import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Summary({ profile, projects }) {
  if (!profile) return null;

  return (
    <section id="summary" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-10"
        >
          <p className="section-title mb-3">About Me</p>
          <h2 className="heading-lg mb-6">Summary</h2>
          <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            {profile.summary}
          </p>
        </motion.div>

        {projects?.length > 0 && (
          <div className="mt-10">
            <p className="section-title mb-6">Featured Projects</p>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project, i) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                <Link
                  to={`/project/${project._id}`}
                  className="glass group block overflow-hidden p-6 transition hover:border-gold/30"
                >
                  <div className="mb-4 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-gold/10">
                    <span className="text-4xl font-bold text-gold/40">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-gold group-hover:text-gold-light">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-white/50">{project.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
