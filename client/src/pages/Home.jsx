import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Links from '../components/Links';
import Navigation from '../components/Navigation';
import { usePortfolioData } from '../hooks/usePortfolioData';

const sections = ['home', 'summary', 'experience', 'skills', 'links'];

export default function Home() {
  const { profile, projects, education, experience, skills, certifications, loading, error } =
    usePortfolioData();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          <p className="text-white/50">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-red-400">Failed to load portfolio data.</p>
        <p className="max-w-md text-sm text-white/50">
          Make sure MongoDB is running and you've seeded the database with{' '}
          <code className="text-gold">npm run seed</code>
        </p>
      </div>
    );
  }

  return (
    <>
      <Hero profile={profile} />
      <Summary profile={profile} projects={projects} />
      <Experience
        experience={experience}
        education={education}
        certifications={certifications}
      />
      <Skills skills={skills} />
      <Links profile={profile} projects={projects} />
      <Navigation activeSection={activeSection} />
    </>
  );
}
