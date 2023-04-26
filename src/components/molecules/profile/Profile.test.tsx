import { RenderResult, render, screen } from "@testing-library/react";
import { Profile } from "./profile";

describe("Profile Tests", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Profile />);
  });

  test("should render a Profile Title with CV owner name", async () => {
    const h1 = await screen.findByText("Andrés Balcázar");
    expect(h1).toBeInTheDocument();
  });

  test("should render a Profile role of owner", async () => {
    const h2 = await screen.findByText("Desarrollador frontend");
    expect(h2).toBeInTheDocument();
  });

  test("should render a Profile description of owner in paragraph", async () => {
    const paragraph = await screen.findByText(
      "Soy un desarrollador frontend y me gusta programar. Trabajo actualmente desarrollando aplicaciones web usando tecnologías de Javascript."
    );
    expect(paragraph).toBeInTheDocument();
  });
});
