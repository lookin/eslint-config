import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import variablesPlugin from './plugins/variables';
import typography from './theme/typography';

export default {
  content: [],

  experimental: {
    optimizeUniversalDefaults: true,
  },

  plugins: [typographyPlugin, variablesPlugin],

  theme: {
    borderRadius: {
      DEFAULT: '0.5rem',
      full: '9999px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      typography,
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    spacing: {
      0: '0px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      32: '8rem',
    },
  },
} satisfies Config;
