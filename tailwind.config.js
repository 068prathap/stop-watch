/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            colors: {
                'button-border': '#c4c8c9',
                'button-color': '#021567'
            },
            boxShadow: {
                'button-shadow': '0px 5px 10px 0px',
            }
        },
    },
    plugins: [],
}

