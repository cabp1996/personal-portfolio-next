import { Experience } from "./experience";
import { render, RenderResult } from "@testing-library/react";

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

  test("should render an Experience", async () => {
    const experience = await wrapper.findByText(props.name);
    expect(experience).toBeTruthy();
  });
});
