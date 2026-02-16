import { useTheme } from '../hooks/useTheme';
import { usePortfolio } from '../hooks/usePortfolio';
import { Suspense, lazy } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const Navbar = lazy(() => import('./Navbar'));
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));
const Certifications = lazy(() => import('./Certifications'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

const Home = () => {
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
};

export default Home;
