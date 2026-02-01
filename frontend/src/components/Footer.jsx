export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 py-8 border-t border-gray-100 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">Dev<span className="text-blue-500">Chauhan</span></span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center md:items-end">
                    <p>Made with React, Tailwind & Spring Boot</p>
                </div>
            </div>
        </footer>
    );
}
