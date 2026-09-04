import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function copySelectedLegacyPages(): Plugin {
  let outputDirectory = "";

  return {
    name: "copy-selected-legacy-pages",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const filesToCopy = ["icon.ico", "hacker.html", "THIRD-PARTY-NOTICES.md"];
      const directoriesToCopy = ["images", "galaxy"];

      for (const relativePath of filesToCopy) {
        const source = resolve(process.cwd(), relativePath);
        const destination = resolve(outputDirectory, relativePath);
        if (existsSync(source)) {
          mkdirSync(dirname(destination), { recursive: true });
          cpSync(source, destination);
        }
      }

      for (const relativePath of directoriesToCopy) {
        const source = resolve(process.cwd(), relativePath);
        const destination = resolve(outputDirectory, relativePath);
        if (existsSync(source)) {
          mkdirSync(dirname(destination), { recursive: true });
          cpSync(source, destination, { recursive: true });
        }
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), copySelectedLegacyPages()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        projects: resolve(process.cwd(), "projects/index.html"),
        lab: resolve(process.cwd(), "lab/index.html"),
        glass: resolve(process.cwd(), "lab/glass/index.html"),
      },
    },
  },
});
