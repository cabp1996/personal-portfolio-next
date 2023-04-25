import { RenderResult, render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";

describe("Navbar test", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Navbar />);
  });

  test("should RENDER portafolio title in heading", async () => {
    const h1 = await screen.findByText("Portafolio");
    expect(h1).toBeInTheDocument();
  });

  test("should render a link with github path", async () => {
    const link = await wrapper.findByText("Github");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/cabp1996");
  });
});
