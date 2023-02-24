import { render, RenderResult, screen } from "@testing-library/react";
import { CustomLink } from "../../../components/atoms/link/CustomLink";
// import "@testing-library/jest-dom";

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

  test("should render a link", async () => {
    const anchor = await wrapper.findByText(props.text);
    expect(anchor).toBeTruthy();
  });
});
