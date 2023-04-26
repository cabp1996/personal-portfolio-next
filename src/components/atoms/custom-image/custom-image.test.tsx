import { CustomImage } from "./custom-image";
import { render, RenderResult, screen } from "@testing-library/react";

describe("CustomImage tests", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      src: "/images/devsu.jpg",
      alt: "alt",
      width: 100,
      height: 100,
      fill: false,
    };

    wrapper = render(<CustomImage {...props} />);
  });

  test("should render CustomImage", async () => {
    const img: HTMLImageElement = screen.getByRole("img");
    expect(img.src).toContain("_next/image?url=%2Fimages%2Fdevsu.jpg");
    expect(img.width).toEqual(props.width);
    expect(img.height).toEqual(props.height);
  });
});
