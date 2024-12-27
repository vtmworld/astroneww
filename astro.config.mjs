import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});

export default defineConfig({
  trailingSlash: false, // Ensures clean URLs
  build: {
    format: 'directory' // Ensures directories instead of index.html
  }
});

import { defineConfig } from 'astro/config';

