import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  site: "https://akatsuki1910.github.io/",
  base: "egg",
});
