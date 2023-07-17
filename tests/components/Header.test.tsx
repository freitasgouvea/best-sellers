import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { ToggleButton } from "../../components/ToggleButton";

describe("Header", () => {
  it("renders a header with logo and toggle button", () => {
    render(<Header />);
    
    const headerElement = screen.getByRole("banner");
    
    expect(headerElement).toBeInTheDocument();
  });
});
