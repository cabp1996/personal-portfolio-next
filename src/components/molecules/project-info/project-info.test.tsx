import { RenderResult, render, screen } from "@testing-library/react";
import { ProjectInfo } from "./project-info";

describe("Project Infor", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      name: "testName",
      description: "testDescription",
      duration: "testDuration",
      skills: ["Skill1"],
    };
    wrapper = render(<ProjectInfo {...props} />);
  });

  test("should render de Project name in heading", async () => {
    const h1 = await screen.findByText(props.name);
    expect(h1).toBeInTheDocument();
  });

  test("should render project description", async () => {
    const description = await screen.findByText(props.description);
    expect(description).toBeInTheDocument();
  });

  test("should render de Project skills", async () => {
    const list = await screen.findByRole("list");
    const listElements = list.children;
    expect(listElements.length).toEqual(props.skills.length);
  });
});
