import type { Config } from "tailwindcss";
import sharedConfig from "@rtt-design-system/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
	content: ["../../packages/ui/src/**/*.tsx"],
	prefix: "ui-",
	presets: [sharedConfig],
};

export default config;
