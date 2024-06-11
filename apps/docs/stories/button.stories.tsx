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
