import { useTheme } from './hooks/useTheme';
import { usePortfolio } from './hooks/usePortfolio';
import { Suspense, lazy } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { theme, toggleTheme } = useTheme();
  const { data, loading } = usePortfolio();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950"><LoadingSkeleton type="card" /></div>}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero data={data.profile} loading={loading} />
        <About data={data.profile} loading={loading} />
        <Skills data={data.skills} loading={loading} />
        <Experience data={data.experience} loading={loading} />
        <Projects data={data.projects} loading={loading} />
        <Certifications />
        <Contact data={data.profile} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
