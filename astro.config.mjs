import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), mdx()]
});