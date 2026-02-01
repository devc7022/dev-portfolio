/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector', // Force class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
