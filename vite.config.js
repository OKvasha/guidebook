import { defineConfig } from "vite"

export default defineConfig({
    base: "/guidebook/",
    build: {
        outDir: "dist",
        assetsInlineLimit: 4096,
    },
})
