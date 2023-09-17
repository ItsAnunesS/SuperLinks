import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'business',
      'cyberpunk',
      'coffee',
      'forest',
      'aqua',
      'dracula',
      'retro',
      'synthwave',
      'luxury',
      'wireframe',
    ],
    darkTheme: "business",
    base: true,
    styled: true,
    utils: true,
    prefix: "daisyui-",
    logs: true,
  },
}
