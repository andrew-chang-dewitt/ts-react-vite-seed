import { useState } from "react";
import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Button } from "$/Button";

describe("button component", () => {
  function setup(initialState: number): HTMLButtonElement {
    function Test() {
      let [count, setCount] = useState(initialState);

      return (
        <Button count={count} onClick={() => setCount((count) => count + 1)} />
      );
    }

    render(<Test />);

    // await userEvent.click(screen.getByRole("button"));
    return screen.getByRole("button");
  }

  test("starts with given initial count", async () => {
    const button = setup(0);
    expect(button).toHaveTextContent("count is 0");
  });
});
