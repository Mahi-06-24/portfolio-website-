import { motion } from 'framer-motion';

const categoryLabels = {
  Languages: 'Languages',
  Frontend: 'Frontend',
  Backend: 'Backend',
};

const techColors = {
  Java: 'from-red-500/30 to-orange-500/20',
  Python: 'from-blue-500/30 to-cyan-500/20',
  JavaScript: 'from-yellow-500/30 to-amber-500/20',
  React: 'from-cyan-500/30 to-blue-500/20',
  HTML: 'from-orange-500/30 to-red-500/20',
  CSS: 'from-blue-500/30 to-indigo-500/20',
  Tailwind: 'from-teal-500/30 to-cyan-500/20',
  'Node.js': 'from-green-500/30 to-emerald-500/20',
  'Express.js': 'from-gray-500/30 to-slate-500/20',
  MongoDB: 'from-green-600/30 to-lime-500/20',
};

export default function Skills({ skills }) {
  const grouped = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-title mb-3">Expertise</p>
          <h2 className="heading-lg">Skills</h2>
        </motion.div>

        <div className="glass p-8 md:p-10">
          <div className="mb-10 grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-10">
            {skills?.map((skill, i) => (
              <motion.div
                key={skill._id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${
                  techColors[skill.name] || 'from-white/10 to-white/5'
                } border border-white/10`}
                title={skill.name}
              >
                <span className="text-center text-xs font-semibold text-white/80">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {Object.entries(grouped || {}).map(([category, items]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="section-title mb-4">{categoryLabels[category] || category}</h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill._id}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/40">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
