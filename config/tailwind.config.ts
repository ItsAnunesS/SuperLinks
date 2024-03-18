import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: true,
        base: true,
        styled: true,
        utils: true,
        logs: true,
    },
}