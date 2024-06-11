import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entryPoints: [
		"src/button/button.tsx",
		"src/dialog/dialog.tsx",
		"src/styles.css",
		"src/utils/cn.ts",
	],
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
