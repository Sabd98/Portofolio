import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
