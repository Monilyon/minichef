import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "public"), // Serve static assets from 'public'
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
};
