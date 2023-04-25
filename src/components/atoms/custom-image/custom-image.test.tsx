import { CustomImage } from "./custom-image";
import { render, RenderResult, screen } from "@testing-library/react";

describe("CustomImage tests", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      src: "/src",
      alt: "alt",
      width: 100,
      height: 100,
    };

    wrapper = render(<CustomImage {...props} />);
  });

  test("should render CustomImage", async () => {
    expect(screen.getByRole("img")).toHaveAttribute("src");
  });
});
