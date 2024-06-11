import { Button } from "@rtt-design-system/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		type: {
			control: { type: "radio" },
			options: ["button", "submit", "reset"],
		},
		variant: {
			control: { type: "radio" },
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: { type: "radio" },
			options: ["default", "sm", "lg", "icon"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: (props) => (
		<Button
			{...props}
			onClick={(): void => {
				alert("Hello from Turborepo!");
			}}
		>
			Hello
		</Button>
	),
	name: "Button",
	args: {
		children: "Hello",
		type: "button",
		variant: "default",
	},
};
