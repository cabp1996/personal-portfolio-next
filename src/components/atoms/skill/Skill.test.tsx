import { Skill } from "./skill";
import { render, RenderResult } from "@testing-library/react";

describe("Skill tests", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      name: "guitarlatocarra",
      percentage: 100,
    };

    wrapper = render(<Skill {...props} />);
  });

  test("should render a skill name", async () => {
    const skill = await wrapper.findByText(props.name);
    expect(skill).toBeInTheDocument();
  });

  test("should render a skill progress bar", async () => {
    const progressbar = await wrapper.findByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });
});
