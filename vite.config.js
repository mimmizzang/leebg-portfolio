import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { sync } from "glob";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: sync("./**/*.html", {
        ignore: ["./node_modules/**", "./dist/**", "./public/**"],
      }).reduce((acc, file) => {
        const name = file.replace(/\.html$/, "").replace(/\//g, "_");
        acc[name] = resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
});
