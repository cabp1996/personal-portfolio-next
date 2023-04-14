import { RenderResult, render, screen } from "@testing-library/react";
import { FooterInfo } from "./FooterInfo";

describe("Footer Info", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<FooterInfo />);
  });

  test("should render autho's name in heading", async () => {
    const h3 = screen.findByRole("heading");
    expect(h3).toBeTruthy();
  });
});
