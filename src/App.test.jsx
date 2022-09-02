import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App test", () => {
  test("Should show H1 hello world", async () => {
    render(<App />);

    expect(await screen.findByRole("heading", { name: /Hello world/i }));

    return false;
  });
});
