import { defineConfig } from 'astro/config';

// Canonical URLs: set PUBLIC_SITE_URL on any host, or rely on VERCEL_URL during Vercel builds.
const siteUrl =
  process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'https://example.com';

export default defineConfig({
  site: siteUrl,
});
