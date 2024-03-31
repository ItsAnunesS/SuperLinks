/** @type {import('tailwindcss').Config} */

const theme = require("daisyui/src/theming/themes")
export default {
    theme: {},
    plugins: [
        require("daisyui")
    ],
    content: [
        `~/components/**/*.{vue,js,ts}`,
        `~/layouts/**/*.vue`,
        `~/pages/**/*.vue`,
        `~/composables/**/*.{js,ts}`,
        `~/plugins/**/*.{js,ts}`,
        `~/utils/**/*.{js,ts}`,
        `~/App.{js,ts,vue}`,
        `~/app.{js,ts,vue}`,
        `~/Error.{js,ts,vue}`,
        `~/error.{js,ts,vue}`,
        `~/app.config.{js,ts}`
    ],
    daisyui: {
        themes: [
            'acid',
            'night',
            'halloween',
            'valentine',
            'christmas',
            'winter',
            {
                'christmas': {
                    ...theme["wireframe"],
                    primary: '#ff0000',
                    'primary-focus': '#cc0000',
                    'primary-content': '#ffffff',
                    secondary: '#00ff00',
                    'secondary-focus': '#00cc00',
                    'secondary-content': '#ffffff',
                    accent: '#0000ff',
                    'accent-focus': '#0000cc',
                    'accent-content': '#ffffff',
                    neutral: '#ffffff',
                    'neutral-focus': '#f0f0f0',
                    'neutral-content': '#000000',
                    'base-100': '#ffffff',
                    'base-200': '#f0f0f0',
                    'base-300': '#e0e0e0',
                    'base-content': '#000000',
                    info: '#2094f3',
                    success: '#009485',
                    warning: '#ff9900',
                    error: '#ff5724',
                },
            }
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    }
}

