import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
	it("renders content", () => {
		const text = "Hello123";

		render(<Button>{text}</Button>);

		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
