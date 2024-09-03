import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  paths: { base: process.env.NODE_ENV === "production" ? "/Shareogram" : "" },
  kit: { adapter: adapter() },
};

export default config;
