// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  //base es la subcarpeta donde se va a desplegar el proyecto
  base: '/test/',
  vite: {
    plugins: [tailwindcss()]
  }
});