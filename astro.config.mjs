// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
        plugins: [
            starlightThemeBlack({
              navLinks: [{ // optional
                label: 'Docs',
                link: '/getting-started',
              }],
              footerText: //optional
                'Delivered by Kayde'
           })
          ],
          title: 'Docs',
          logo: { src: '/src/assets/kade-logo.png', alt: 'Kayde logo' },
          social: [],
          defaultLocale: 'root',
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [
                      { label: 'Quick Start', slug: 'guides/getting-started' },
                      { label: 'Installation', slug: 'guides/installation' },
                      { label: 'Your First Site', slug: 'guides/first-site' },
                      { label: 'Authentication', slug: 'guides/authentication' },
                  ],
              },
              {
                  label: 'Core Concepts',
                  items: [
                      { label: 'Sites & Projects', slug: 'concepts/sites-projects' },
                      { label: 'Content Management', slug: 'concepts/content-management' },
                      { label: 'Themes & Templates', slug: 'concepts/themes-templates' },
                      { label: 'Domain Management', slug: 'concepts/domains' },
                  ],
              },
              {
                  label: 'Website Builder',
                  items: [
                      { label: 'Page Editor', slug: 'builder/page-editor' },
                      { label: 'Components', slug: 'builder/components' },
                      { label: 'Layouts', slug: 'builder/layouts' },
                      { label: 'Media Management', slug: 'builder/media' },
                  ],
              },
              {
                  label: 'Integrations',
                  items: [
                      { label: 'WordPress Migration', slug: 'integrations/wordpress' },
                      { label: 'Third-party Services', slug: 'integrations/services' },
                      { label: 'Analytics', slug: 'integrations/analytics' },
                  ],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});