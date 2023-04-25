import { RenderResult, render, screen } from "@testing-library/react";
import { Profile } from "./profile";

describe("Profile Tests", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Profile />);
  });

  test("should render a Profile Title", async () => {
    const h1 = screen.findByRole("heading");
    expect(h1).toBeTruthy();
  });
});
