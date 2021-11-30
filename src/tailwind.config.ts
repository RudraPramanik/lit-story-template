import { Configuration } from 'twind';

export const tailwindConfiguration: Configuration = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Helvetica', 'Arial', 'sans-serif'],
        },
    },
    variants: {},
    preflight: false,
};
