import { RenderResult, render, screen } from "@testing-library/react";
import { TechnicalInfo } from "./technical-info";
import { skillsData } from "../../../utils/constants/skill.data";
import { experienceData } from "../../../utils/constants/experience.data";

describe("TechnicalInfo tests", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<TechnicalInfo />);
  });

  test("should render heading for skills and experiencie", async () => {
    const skillHeading = await screen.findByText("Skills");
    const experienceHeading = await screen.findByText("Experiencia");
    expect(skillHeading).toBeTruthy();
    expect(experienceHeading).toBeTruthy();
  });

  test("should render all skills", () => {
    const container = wrapper.container.getElementsByClassName(
      "section__container__skillslist"
    );
    const skillITems = container[0].querySelectorAll("li");
    expect(skillITems.length).toEqual(skillsData.length);
  });

  test("should render all experiences", () => {
    const container = wrapper.container.getElementsByClassName(
      "section__container"
    );
    const experiencesItems = container[0].querySelectorAll("li");
    expect(experiencesItems.length).toEqual(experienceData.length);
  });
});
