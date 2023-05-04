const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'theme1': '#000033',
                'theme2': '#FFCC00',
              },
             
            height: {
              '110': '28rem',
              '128': '32rem',
            },
            width: {
              '110': '28rem',
              '128': '32rem',
            },
            scale: {
              '175': '1.75',
              '200': '2.00'
            },
              
              gridTemplateColumns: {
                // Simple 15 column grid
                '14': 'repeat(14, minmax(0, 1fr))',
              },
            
            
                
        },
   
    },

    plugins: [require('@tailwindcss/forms')],
};
