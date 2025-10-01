// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // src/app, src/components 모두 커버
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
