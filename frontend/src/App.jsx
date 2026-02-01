import { useTheme } from './hooks/useTheme';
import { usePortfolio } from './hooks/usePortfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { data, loading } = usePortfolio();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero data={data.profile} loading={loading} />
      <About data={data.profile} loading={loading} />
      <Skills data={data.skills} loading={loading} />
      <Experience data={data.experience} loading={loading} />
      <Projects data={data.projects} loading={loading} />
      <Certifications />
      <Contact data={data.profile} />
      <Footer />
    </div>
  );
}

export default App;
