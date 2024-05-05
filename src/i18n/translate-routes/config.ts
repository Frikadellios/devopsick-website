import type { AstroUserConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import million from 'million/compiler';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from '../../utils/readTime.mjs';
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export const config: AstroUserConfig = {
  site: 'https://artursopelnik.github.io',
  base: '/astro-translate-routes-example',
  trailingSlash: 'always',
  output: "hybrid",
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
  }), partytown()],
};

export const base = config.base
  ? config.base.split('/').length === 1
    ? config.base
    : config.base.split('/')[1] || ''
  : '';

export const configHelper: {
  isTrailingSlashEnabled: boolean;
  isBaseEnabled: boolean;
} = {
  isTrailingSlashEnabled:
    config.trailingSlash !== undefined && config.trailingSlash === 'always',
  isBaseEnabled: base !== '',
};