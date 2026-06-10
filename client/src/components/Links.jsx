import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Send } from 'lucide-react';
import { sendContact } from '../api';

export default function Links({ profile, projects }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const socials = [
    {
      label: 'LinkedIn',
      href: profile?.socialLinks?.linkedin,
      icon: Linkedin,
      color: 'hover:border-blue-400/50 hover:bg-blue-500/10',
    },
    {
      label: 'GitHub',
      href: profile?.socialLinks?.github,
      icon: Github,
      color: 'hover:border-white/30 hover:bg-white/10',
    },
    {
      label: 'Email',
      href: profile?.socialLinks?.email || `mailto:${profile?.email}`,
      icon: Mail,
      color: 'hover:border-gold/50 hover:bg-gold/10',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', text: '' });
    try {
      const result = await sendContact(form);
      setStatus({ type: 'success', text: result.message });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="links" className="px-4 py-16 pb-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-title mb-3">Connect</p>
          <h2 className="heading-lg">Links & Contact</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass p-8">
            <h3 className="mb-6 text-lg font-semibold">Social Profiles</h3>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {socials
                .filter(({ href }) => href)
                .map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 rounded-2xl border border-white/10 p-6 transition ${color}`}
                  >
                    <Icon size={28} className="text-gold" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
            </div>

            <h3 className="mb-4 text-lg font-semibold">Project Repositories</h3>
            <div className="space-y-3">
              {projects?.map((project) =>
                project.githubUrl ? (
                  <a
                    key={project._id}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition hover:border-gold/30 hover:bg-white/5"
                  >
                    <div>
                      <p className="font-medium text-gold">{project.title}</p>
                      <p className="text-xs text-white/50">{project.date}</p>
                    </div>
                    <ExternalLink size={16} className="text-white/40" />
                  </a>
                ) : (
                  <Link
                    key={project._id}
                    to={`/project/${project._id}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition hover:border-gold/30 hover:bg-white/5"
                  >
                    <div>
                      <p className="font-medium text-gold">{project.title}</p>
                      <p className="text-xs text-white/50">{project.date}</p>
                    </div>
                    <ExternalLink size={16} className="text-white/40" />
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="glass p-8">
            <h3 className="mb-6 text-lg font-semibold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/50"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/50"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/50"
              />
              {status.text && (
                <p
                  className={`text-sm ${
                    status.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {status.text}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-semibold text-black transition hover:bg-gold-light disabled:opacity-60"
              >
                <Send size={16} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-white/30">
          © {new Date().getFullYear()} {profile?.name}. Built with MERN Stack.
        </p>
      </div>
    </section>
  );
}
