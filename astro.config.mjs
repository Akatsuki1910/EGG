import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: [vercel(), deno()],
});
