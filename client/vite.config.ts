/// <reference types="vite/client" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [TanStackRouterVite(), react()],
    server: {
      proxy: {
        "/api": {
          target: env.BASE_URL,
          changeOrigin: true,
        },
      },
    },
    define: {
      __APP_MODE__: JSON.stringify(mode),
    },
  };
});
