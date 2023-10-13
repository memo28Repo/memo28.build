/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}",], theme: {
        extend: {
            animation: {
                trackingInContract: 'trackingInContract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both'
            }, keyframes: {
                trackingInContract: {
                    '0%': {
                        'letter-spacing': '1em', opacity: '0',
                    }, '40%': {
                        opacity: '0.6'
                    }, '100%': {
                        'letter-spacing': 'normal', opacity: 1
                    }
                },
            }

        },
    }, plugins: [],
}
