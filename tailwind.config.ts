import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bannerColor: '#53389E',
        secondaryBg: '#F9FAFB',
        primaryButton: '#7F56D9',
        linkColor: '#6941C6',
        secondaryText: '#E9D7FE',
        tercearyText: '#344054',
        secondaryBorder: '#D0D5DD'
      },
      flex: {
        '0.5': '0.5 1 50%'
      }
    },
  },
  plugins: [],
};
export default config;
