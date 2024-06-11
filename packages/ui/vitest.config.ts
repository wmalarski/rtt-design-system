import react from "@vitejs/plugin-react";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup.ts",
		coverage: {
			exclude: ["*.config.*", ...coverageConfigDefaults.exclude],
		},
	},
});
