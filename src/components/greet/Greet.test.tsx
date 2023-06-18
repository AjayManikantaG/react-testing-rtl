import { screen, render } from "@testing-library/react";
import Greet from "./Greet.tsx";

describe("Render Greet component correctly", () => {
  test("Greets Hello", () => {
    render(<Greet />);
    const headingText = screen.getByText("Hello");
    expect(headingText).toBeInTheDocument();
  });

  test("Greet Hello along with props name", () => {
    render(<Greet name="Ajay" />);
    const headingText = screen.getByRole("heading", { level: 1 });
    expect(headingText).toHaveTextContent(/Hello Ajay/i);
  });
});
