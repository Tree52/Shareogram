import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  paths: { base: process.env.NODE_ENV === "production" ? "/Shareogram" : "" },
  preprocess: [vitePreprocess()],
  kit: { adapter: adapter() },
};

export default config;
