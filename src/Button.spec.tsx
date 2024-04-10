import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";

import { Button } from "./Button";
import App from "./App";

test("button starts with count of zero", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button").textContent).toBe("count is 0");
});
