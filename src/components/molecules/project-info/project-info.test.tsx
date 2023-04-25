import { RenderResult, render, screen } from "@testing-library/react";
import { ProjectInfo } from "./project-info";

describe("Project Infor", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      name: "test",
      description: "test",
      duration: "test",
      skills: ["Skill1"],
    };
    wrapper = render(<ProjectInfo {...props} />);
  });

  test("should render de Project name in heading", async () => {
    const h1 = screen.findByRole("heading");
    expect(h1).toBeTruthy();
  });
});
