/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark-luxury palette lifted directly from the original design
        ink:      "#0E0E0E", // page background
        ink2:     "#1A1914", // card background
        ink3:     "#1E1B12", // raised tiles (avatar, accepted chat bubble)
        ink4:     "#141210", // deepest (thumb backgrounds)
        ink5:     "#111008", // tech tag background
        line:     "#2A2820", // hairline borders/dividers
        gold:     "#C9A84C", // primary accent
        gold2:    "#8A6E2F", // secondary/darker accent
        cream:    "#F0EBE1", // primary text (headings, names)
        sand:     "#9E9484", // secondary text (bio, bullets)
        muted:    "#5A5448", // tertiary text (labels, captions)
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        pulse2: 'pulse2 2s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
