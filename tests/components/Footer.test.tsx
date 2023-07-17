import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer />);

    const authorElement = screen.getByText(/Created by Flavio/i);

    expect(authorElement).toBeInTheDocument();
  });
});