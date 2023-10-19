/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'signika': ['Signika', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
                marquee2: 'marquee2 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            display: ['group-hover'],
            screens: {
                'mobile': '320px', // Define a custom mobile breakpoint
            },
        },

    },
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
