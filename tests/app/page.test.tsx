import { render, screen } from "@testing-library/react";
import Page from "../../app/page";
import { useContext } from "react";
import { NavigationContextType } from "types/context";

jest.mock("../../api/data", () => ({
  getData: jest.fn().mockResolvedValue({
    results: {
      lists: [
        {
          books: [
            {
              age_group: " ",
              amazon_product_url: " ",
              article_chapter_link: " ",
              author: "Mary Ann",
              book_image: "test-image-url",
              book_image_width: 0,
              book_image_height: 0,
              book_review_link: " ",
              book_uri: " ",
              contributor: "Mary Ann",
              contributor_note: " ",
              created_date: " ",
              description: "New test book.",
              first_chapter_link: " ",
              price: " ",
              primary_isbn10: " ",
              primary_isbn13: " ",
              publisher: " ",
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: " ",
              title: "New Book",
              updated_date: " ",
              weeks_on_list: 3,
              buy_links: [
                { name: "Amazon", url: "https://www.amazon.com" },
                { name: "Barnes & Noble", url: "https://www.barnesandnoble.com" },
              ],
            },
          ],
        },
      ],
    },
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Page", () => {
  beforeEach(() => {
    const setNavigationContextMock = jest.fn();

    (useContext as jest.Mock).mockReturnValue({
      navigation: "",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
  });

  test("renders page component", async () => {
    render(await Page());

    expect(await screen.findByText("Combined Print & E-Book Fiction")).toBeInTheDocument();
  });
});
