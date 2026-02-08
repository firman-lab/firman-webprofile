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
                'scroll-left': 'scroll-left 30s linear infinite',
                spinslow: 'spins 5s linear infinite',
                float: 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'spin-very-slow': 'spin 20s linear infinite',
                'orbit': 'orbit 12s linear infinite',
                'ripple-1': 'ripple 4s ease-out infinite',
                'ripple-2': 'ripple 4s ease-out 1s infinite',
                'ripple-3': 'ripple 4s ease-out 2s infinite',
                'ripple-4': 'ripple 4s ease-out 3s infinite',
            },
            keyframes: {
                'scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                spins:{
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '1' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                ripple: {
                    '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' },
                    '100%': { transform: 'translate(-50%, -50%) scale(1.8)', opacity: '0' },
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
