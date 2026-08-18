// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rom-9611.github.io',
  base: '/sell-art',
  // ...keep your existing config options here
});
