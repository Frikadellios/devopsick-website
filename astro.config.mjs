import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import million from 'million/compiler';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/utils/readTime.mjs';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [million.vite({
      mode: 'react',
      server: true,
      auto: {
        threshold: 0.05,
        skip: ['useBadHook', /badVariable/g]
      }
    }), tailwindcss()]
  },
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    gfm: true
  },
  integrations: [react(), sitemap(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    drafts: true
  })]
});