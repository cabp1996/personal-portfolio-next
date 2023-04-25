import { Experience } from "./experience";
import { render, RenderResult, screen } from "@testing-library/react";

describe("Experience tests", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      name: "Tocador de guitarras",
      duration: "sep 2020 - may 2021",
      description: "tocaba la guitarra",
    };

    wrapper = render(<Experience {...props} />);
  });

  test("should render an experience title", async () => {
    const title = await screen.findByText(props.name);
    expect(title).toBeInTheDocument();
  });

  test("should render an experience duration", async () => {
    const duration = await screen.findByText(props.duration);
    expect(duration).toBeInTheDocument();
  });

  test("should render an experience description", async () => {
    const description = await screen.findByText(props.description);
    expect(description).toBeInTheDocument();
  });
});
