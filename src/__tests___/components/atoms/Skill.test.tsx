import { Skill } from "../../../components/atoms/Skill/Skill";
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

  test("should render a skill", async () => {
    const skill = await wrapper.findByText(props.name);
    expect(skill).toBeTruthy();
  });
});
