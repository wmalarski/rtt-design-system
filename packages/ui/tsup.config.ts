import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entryPoints: ["src/button/button.tsx", "src/styles.css"],
	format: ["cjs", "esm"],
	dts: true,
	sourcemap: true,
	external: ["react"],
	treeshake: true,
	splitting: true,
	minify: true,
	clean: true,
	...options,
}));
