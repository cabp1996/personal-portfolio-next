import { Avatar } from "../../../components/atoms/Avatar/Avatar";
import { render, RenderResult } from "@testing-library/react";

describe("Avatar tests", () => {
  let wrapper: RenderResult;
  let props: any;

  beforeEach(() => {
    props = {
      src: "/src",
      alt: "alt",
      width: 100,
      height: 100,
    };

    wrapper = render(<Avatar {...props} />);
  });

  test("should render Avatar", async () => {
    const avatar = await wrapper.findByRole('img');
    expect(avatar).toBeTruthy();
  });
});
