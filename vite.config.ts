import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { readFileSync } from "node:fs";

// Generate a static HTML page for every sitemap URL, including service routes.
const pages = [...readFileSync(new URL("./public/sitemap.xml", import.meta.url), "utf8")
  .matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => ({ path: new URL(match[1]!).pathname }));

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages,
    }),
    nitro(),
    react(),
  ],
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router"] },
});
