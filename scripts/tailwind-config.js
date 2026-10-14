// Shared Tailwind CDN config. Load right after the Tailwind CDN script.
// Palette follows the AIMO site: neutral grays are replaced by an
// indigo-tinted scale so existing gray-* utilities pick up the theme.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lato', '"Trebuchet MS"', 'Helvetica', 'sans-serif'],
        sans: ['Lato', '"Trebuchet MS"', 'Helvetica', 'sans-serif'],
        display: ['"Libre Franklin"', '"Trebuchet MS"', 'sans-serif'],
      },
      colors: {
        black: '#0d0c22',
        gray: {
          50: '#f6f5f9',
          100: '#eeedf5',
          200: '#e4e2ee',
          300: '#cfcde2',
          400: '#9c98c4',
          500: '#7a7898',
          600: '#5b5980',
          700: '#3d3b60',
          800: '#2c2a50',
          850: '#211f45',
          900: '#171636',
          950: '#0d0c22',
        },
        // Accent colours used for links/focus states map onto the indigo family
        sky: {
          300: '#cfcde2',
          400: '#b9b5db',
          500: '#6b67ad',
          600: '#322e86',
          700: '#211f5c',
        },
        blue: {
          50: '#f6f5f9',
          100: '#eeedf5',
          200: '#e4e2ee',
          300: '#b9b5db',
          400: '#9c98c4',
          500: '#6b67ad',
          600: '#322e86',
          700: '#2a2672',
          800: '#211f5c',
          900: '#171636',
        },
        ink: '#171636',
        navy: '#211f5c',
        indigo: '#322e86',
        violet: '#6b67ad',
        lilac: '#b9b5db',
        muted: '#5b5980',
        line: '#e4e2ee',
        tint: '#f6f5f9',
      },
      borderRadius: {
        DEFAULT: '2px',
        md: '2px',
        lg: '3px',
        xl: '4px',
        '2xl': '4px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
};
