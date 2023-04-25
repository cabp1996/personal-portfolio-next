import { RenderResult, render } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      text: "test",
      onClick: jest.fn(),
    };

    wrapper = render(<Button {...props} />);
  });

  test("should render a button with custom text", async () => {
    const button = await wrapper.findByText(props.text);
    expect(button).toBeTruthy();
  });

  test("should button call onClick to trigger function", async () => {
    const button = await wrapper.findByText(props.text);
    button.click();
    expect(props.onClick).toHaveBeenCalled();
  });
});
