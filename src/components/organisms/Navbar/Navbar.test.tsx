import { RenderResult, render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";

describe("Navbar test", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Navbar />);
  });

  test("should portafolio title in heading", async () => {
    const h1 = screen.findByText("Portafolio");
    expect(h1).toBeTruthy();
  });
});
