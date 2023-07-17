import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header", () => {
  test("renders a header with logo and toggle button", () => {
    render(<Header />);
    
    const headerElement = screen.getByRole("banner");
    
    expect(headerElement).toBeInTheDocument();
  });
});
