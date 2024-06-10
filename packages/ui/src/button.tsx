import { type ComponentProps, forwardRef } from "react";

export type ButtonProps = ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		return <button type="button" ref={ref} {...props} />;
	},
);

Button.displayName = "Button";
