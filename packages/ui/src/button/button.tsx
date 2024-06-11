import { type ComponentProps, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		return (
			<button
				type="button"
				className="ui-bg-red-800 ui-p-8"
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";
