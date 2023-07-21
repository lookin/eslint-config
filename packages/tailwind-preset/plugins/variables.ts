import plugin from 'tailwindcss/plugin';

import hexToRgb from '../utils/hexToRgb';

const variables = plugin(
  ({ addBase }) => {
    addBase({
      '.dark': {
        '--color-bg-primary': hexToRgb('#000'),
        '--color-bg-secondary': hexToRgb('#111'),
        '--color-border-primary': hexToRgb('#333'),
        '--color-border-secondary': hexToRgb('#444'),
        '--color-fg-primary': hexToRgb('#fff'),
        '--color-fg-secondary': hexToRgb('#888'),
      },
      '.light': {
        '--color-bg-primary': hexToRgb('#fff'),
        '--color-bg-secondary': hexToRgb('#fafafa'),
        '--color-border-primary': hexToRgb('#eaeaea'),
        '--color-border-secondary': hexToRgb('#999'),
        '--color-fg-primary': hexToRgb('#000'),
        '--color-fg-secondary': hexToRgb('#666'),
      },
    });
  },
  {
    theme: {
      extend: {
        backgroundColor: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
          invert: 'rgb(var(--color-fg-primary) / <alpha-value>)',
        },
        borderColor: {
          primary: 'rgb(var(--color-border-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-border-secondary) / <alpha-value>)',
          invert: 'rgb(var(--color-fg-primary) / <alpha-value>)',
        },
        textColor: {
          primary: 'rgb(var(--color-fg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-fg-secondary) / <alpha-value>)',
          invert: 'rgb(var(--color-bg-primary) / <alpha-value>)',
        },
      },
    },
  },
);

export default variables;
