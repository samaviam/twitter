const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'auth-texture': "url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)"
            },
            colors: {
                'twitter-blue': '#1d9bf0',
                'twitter-gray': '#71767b',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                twitterH: ['TwitterChirpH', ...defaultTheme.fontFamily.sans],
                twitterM: ['TwitterChirpM', ...defaultTheme.fontFamily.sans],
                twitterR: ['TwitterChirpR', ...defaultTheme.fontFamily.sans]
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
