import { Button } from "@rtt-design-system/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@rtt-design-system/ui/dialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
	component: Dialog,
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Share</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<label htmlFor="link" className="sr-only">
							Link
						</label>
						<input
							id="link"
							defaultValue="https://ui.shadcn.com/docs/installation"
							readOnly
						/>
					</div>
					<Button type="submit" size="sm" className="px-3">
						<span className="sr-only">Copy</span>
					</Button>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
	name: "Dialog",
	args: {},
};
