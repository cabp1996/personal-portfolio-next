import { RenderResult, render, screen } from "@testing-library/react";
import { FooterInfo } from "./footer-info";

describe("Footer Info", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<FooterInfo />);
  });

  test("should render author's name in heading", async () => {
    const h3 = await screen.findByText("© Andrés Balcázar");
    expect(h3).toBeInTheDocument();
  });

  test("should render current year", async () => {
    const span = await screen.findByText("2023");
    expect(span).toBeInTheDocument();
  });
});
