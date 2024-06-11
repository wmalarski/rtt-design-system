import { dirname, join, resolve } from "node:path";

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}

const config = {
	stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],

	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-docs"),
		"@chromatic-com/storybook",
	],

	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

	core: {},

	async viteFinal(config) {
		// customize the Vite config here
		return {
			...config,
			define: { "process.env": {} },
			esbuild: {
				jsx: "automatic",
			},
			resolve: {
				alias: [
					{
						find: "ui",
						replacement: resolve(__dirname, "../../../packages/ui/"),
					},
				],
			},
		};
	},

	docs: {
		autodocs: true,
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};

export default config;
