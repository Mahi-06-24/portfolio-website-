import { motion } from 'framer-motion';
import { GraduationCap, Building2 } from 'lucide-react';

export default function Experience({ experience, education, certifications }) {
  return (
    <section id="experience" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-title mb-3">Career</p>
          <h2 className="heading-lg">Experience & Education</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass p-8">
            <div className="mb-6 flex items-center gap-3">
              <Building2 className="text-gold" size={22} />
              <h3 className="text-xl font-semibold text-white">Internship</h3>
            </div>
            <div className="space-y-6">
              {experience?.map((exp) => (
                <div
                  key={exp._id}
                  className="border-l-2 border-gold/40 pl-5"
                >
                  <p className="text-sm text-gold">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold">{exp.role}</h4>
                  <p className="text-white/70">
                    {exp.company} · {exp.type}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{exp.location}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.highlights?.map((item) => (
                      <li key={item} className="text-sm text-white/60">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-gold" size={22} />
              <h3 className="text-xl font-semibold text-white">Education & Certificates</h3>
            </div>
            <div className="space-y-5">
              {education?.map((edu) => (
                <div key={edu._id} className="border-b border-white/5 pb-5 last:border-0">
                  <p className="text-sm text-gold">
                    {edu.startDate} – {edu.endDate}
                  </p>
                  <h4 className="mt-1 font-semibold text-white">{edu.institution}</h4>
                  <p className="text-sm text-white/70">{edu.degree}</p>
                  <p className="text-sm text-white/50">
                    {edu.location} · {edu.score}
                  </p>
                </div>
              ))}
              {certifications?.map((cert) => (
                <div key={cert._id} className="rounded-xl border border-gold/20 bg-gold/5 p-4">
                  <p className="font-medium text-gold">{cert.title}</p>
                  <p className="text-sm text-white/60">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
