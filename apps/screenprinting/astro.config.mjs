// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      iconDir: path.resolve("../../packages/shared/icons"),
    }),
  ],
  vite: {
    resolve: {
      alias: [
        {
          find: "@shared",
          replacement: path.resolve("../../packages/shared"),
        },
      ],
    },
  },
});
