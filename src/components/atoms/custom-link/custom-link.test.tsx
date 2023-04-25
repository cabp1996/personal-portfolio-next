import { cleanup, render, RenderResult } from "@testing-library/react";
import { CustomLink } from "./custom-link";

describe("Custom Link", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      text: "link",
      path: "/",
      fontSize: "14px",
    };

    wrapper = render(<CustomLink {...props} />);
  });

  afterEach(cleanup);

  test("should render a link with custom text", async () => {
    const anchor = await wrapper.findByText(props.text);
    expect(anchor).toBeTruthy();
  });

  test("should render a link with default props", async () => {
    props = {
      text: "link2",
      path: "/",
    };

    wrapper = render(<CustomLink {...props} />);
    const anchor = await wrapper.findByText(props.text);
    expect(anchor).toBeTruthy();
  });
});
