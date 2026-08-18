import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // or '@astrojs/tailwind', depending on your setup

export default defineConfig({
  site: 'https://rom-9611.github.io',
  base: '/sell-art',
  vite: {
    plugins: [tailwindcss()]
  }
});
