import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";

describe("Footer", () => {
  test("renders a footer", () => {
    render(<Footer />);

    const link = screen.getByTestId("nyt-link")

    expect(link).toBeInTheDocument();
  });
});
