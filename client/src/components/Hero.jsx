import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Download } from 'lucide-react';

const contactIcons = {
  email: Mail,
  linkedin: Linkedin,
  phone: Phone,
  location: MapPin,
};

export default function Hero({ profile }) {
  if (!profile) return null;

  const contacts = [
    { key: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahimesh-mukherjee',
      href: profile.socialLinks?.linkedin,
    },
    { key: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { key: 'location', label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id="home" className="relative min-h-screen px-4 pb-32 pt-8 md:px-8">
      <div className="glass relative mx-auto max-w-6xl overflow-hidden p-6 md:p-10">
        <div className="mb-8 flex items-center justify-between">
          {profile.openToWork && (
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to work
            </div>
          )}
          <a
            href={profile.cvUrl || '#'}
            download
            className="ml-auto flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-title mb-3">{profile.title}</p>
            <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              {profile.name}
            </h1>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {contacts.map(({ key, label, value, href }) => {
                const Icon = contactIcons[key];
                const content = (
                  <div className="glass-sm min-h-full min-w-0 overflow-hidden p-4 transition hover:border-gold/30">
                    <Icon size={18} className="mb-2 shrink-0 text-gold" />
                    <p className="mb-1 text-xs text-white/50">{label}</p>
                    <p className="break-words text-xs font-medium leading-snug text-white/90">
                      {value}
                    </p>
                  </div>
                );
                return href ? (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={key} className="min-w-0">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-64 w-64 rounded-full bg-orange-500/40 blur-[80px] md:h-80 md:w-80" />
            <div className="relative h-72 w-56 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent md:h-96 md:w-72">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <svg
                viewBox="0 0 200 300"
                className="h-full w-full text-white/20"
                fill="currentColor"
              >
                <ellipse cx="100" cy="70" rx="45" ry="50" />
                <path d="M30 300 C30 180, 70 150, 100 150 C130 150, 170 180, 170 300 Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
