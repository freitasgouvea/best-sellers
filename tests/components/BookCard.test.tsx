import { render, screen } from "@testing-library/react";
import { BookCard } from "../../components/BookCard";
import { latestData } from "../../mocks/data.mock";

describe("BookCard", () => {
  test("renders book card with correct information", () => {
    render(<BookCard book={latestData.results.lists[0].books[0]} />);

    const rankElement = screen.getByText("# 1");
    expect(rankElement).toBeInTheDocument();

    const titleElement = screen.getByText("Test Book");
    expect(titleElement).toBeInTheDocument();

    const contributorElement = screen.getByText("John Doe");
    expect(contributorElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("This is a test book.");
    expect(descriptionElement).toBeInTheDocument();

    const bookCoverElement = screen.getByAltText("Book Cover");
    expect(bookCoverElement).toBeInTheDocument();

    const amazonLinkElement = screen.getByText("Amazon");
    expect(amazonLinkElement).toBeInTheDocument();

    const barnesNobleLinkElement = screen.getByText("Barnes & Noble");
    expect(barnesNobleLinkElement).toBeInTheDocument();
  });
});
