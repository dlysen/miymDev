import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// SPA — history fallback is on by default in vite dev/preview.
export default defineConfig({
  // Custom apex domain (miym.dev) → served from the root, not /<repo>/.
  base: "/",
  plugins: [react()],
  server: { port: 5173, open: false },
});
