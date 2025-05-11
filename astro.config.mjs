// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    // Old integrations:
    // integrations: [react(), tailwind(), sitemap()],
    // site: template.website_url,
    // base: template.base,

    integrations: [tailwind()],
    site: 'https://Ashhab95.github.io',
    output: 'static'
});
