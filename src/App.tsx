import React, { useEffect } from 'react';
import { useRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const { page, projectSlug, navigate } = useRouter();

  const isContactPage = page === 'contact';

  // Listen to keyboard shortcut ESC when on a project detail page to return to work
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && page === 'project') {
        navigate('work');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isContactPage ? 'bg-[#141414] text-[#FAFAFA]' : 'bg-[#FAFAF8] text-[#171717]'
      }`}
    >
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={page}
        onNavigate={navigate}
        isDarkTheme={isContactPage}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'work' && <WorkPage onNavigate={navigate} />}
        {page === 'project' && (
          <ProjectDetailPage slug={projectSlug || 'polestar-aerolight'} onNavigate={navigate} />
        )}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'expertise' && <ExpertisePage onNavigate={navigate} />}
        {page === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Minimalist Footer */}
      <Footer onNavigate={navigate} isDarkTheme={isContactPage} />
    </div>
  );
}
