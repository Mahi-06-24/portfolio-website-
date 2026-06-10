import { motion } from 'framer-motion';
import { Home, FileText, Briefcase, Wrench, Link2 } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'summary', label: 'Summary', icon: FileText },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'links', label: 'Links', icon: Link2 },
];

export default function Navigation({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
    >
      <div className="inline-flex w-max items-center justify-center gap-1 rounded-full border border-white/10 bg-[#1a1410]/90 px-2 py-2 shadow-glass backdrop-blur-2xl">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive ? 'text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={16} className="relative z-10" />
              <span className="relative z-10 text-xs sm:text-sm">{label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
