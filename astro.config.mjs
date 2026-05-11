import { defineConfig } from 'astro/config';

// Set PUBLIC_SITE_URL in your host (e.g. Vercel env) to your real domain for correct canonical URLs & sitemap.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
});
