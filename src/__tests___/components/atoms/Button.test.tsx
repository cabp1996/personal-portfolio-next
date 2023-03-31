import { RenderResult, render } from "@testing-library/react";
import { Button } from "../../../components/atoms/Button/Button";

describe("Button", () => {
    let wrapper: RenderResult;
    let props: any;
  
    beforeEach(() => {
      props = {
        text: "test",

      };
  
      wrapper = render(<Button {...props} />);
    });
  
    test("should render a button", async () => {
      const button = await wrapper.findByRole('button');
      expect(button).toBeTruthy();
    });
  });
  