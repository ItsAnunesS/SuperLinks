import type { Config } from 'tailwindcss';
const themes = require("daisyui/src/theming/themes");

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['[data-theme=light]'],
          '.fill-quivox-bg': {
            'fill': '#edf2f4'
          },
          '.fill-quivox': {
            'fill': '#ff5100'
          },
          '.fill-bitwo-bg': {
            'fill': '#fff'
          },
          '.fill-dynatrisoft-bg': {
            'fill': '#fff'
          },
        },
        dark: {
          ...themes["[data-theme=dark]"],
          '.fill-quivox-bg': {
            'fill': '#fff'
          },
          '.fill-quivox': {
            'fill': '#ff5100'
          },
          '.fill-bitwo-bg': {
            'fill': '#fff'
          },
          '.fill-dynatrisoft-bg': {
            'fill': '#fff'
          },
        },
        business: {
          ...themes["[data-theme=business]"],
          '.fill-quivox-bg': {
            'fill': '#fff'
          },
          '.fill-quivox': {
            'fill': '#ff5100'
          },
          '.fill-bitwo-bg': {
            'fill': '#fff'
          },
          '.fill-dynatrisoft-bg': {
            'fill': '#fff'
          },
        },
        dracula: {
          ...themes['[data-theme=dracula]'],
          '.fill-quivox-bg': {
            'fill': '#fff'
          },
          '.fill-quivox': {
            'fill': '#ff5100'
          },
          '.fill-bitwo-bg': {
            'fill': '#fff'
          },
          '.fill-dynatrisoft-bg': {
            'fill': '#fff'
          },
        },
        retro: {
          ...themes["[data-theme=retro]"],
          '.fill-quivox-bg': {
            'fill': '#fff'
          },
          '.fill-quivox': {
            'fill': '#ff5100'
          },
          '.fill-bitwo-bg': {
            'fill': '#fff'
          },
          '.fill-dynatrisoft-bg': {
            'fill': '#fff'
          },
        }
      },
    ],
    darkTheme: "business",
    base: true,
    styled: true,
    utils: true,
    prefix: "daisyui-",
    logs: true,
  },
}
