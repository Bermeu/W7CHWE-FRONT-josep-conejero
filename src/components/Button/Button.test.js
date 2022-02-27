import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given Button component", () => {
  describe("When it recieves LOGIN's text", () => {
    test("Then it should render a button with LOGIN's text", () => {
      const text = "LOGIN";

      render(<Button text={text} actionOnClick={() => {}} />);

      const foundElement = screen.queryByRole("button", { name: text });

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When it recieves an actionOnClick", () => {
    test("Then actionOnClick should be invoked when the button is clicked", () => {
      const action = jest.fn();

      render(<Button actionOnClick={action} text={""} />);

      const foundElement = screen.queryByRole("button");
      userEvent.click(foundElement);

      expect(action).toHaveBeenCalled();
    });
  });
});
