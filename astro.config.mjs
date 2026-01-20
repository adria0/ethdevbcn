// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // When deploying to GitHub Pages for a project page, set `base` to the
  // repository name so absolute paths to `/images/...` and other public
  // assets resolve correctly.
  base: "/ethdevbcn/",
  // Optional: explicit site URL (helps some integrations and meta generation)
  site: "https://adria0.github.io/ethdevbcn/",
});
