import { render, screen, waitFor } from "@testing-library/react";
import { BookList } from "../../components/BookList";
import { NavigationContext, DateContext } from "../../app/providers";
import { latestData, updatedData } from "../../mocks/data.mock";
import * as api from "../../api/data";

jest.mock("../../api/data", () => ({
  getData: jest.fn().mockResolvedValue({}),
}));

describe("BookList", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders book list", async () => {
    render(
      <NavigationContext.Provider
        value={{ navigation: "CombinedPrintAndEBookFiction", setNavigationContext: jest.fn() }}
      >
        <DateContext.Provider value={{ date: null, setDateContext: jest.fn() }}>
          <BookList latestData={latestData} />
        </DateContext.Provider>
      </NavigationContext.Provider>
    );

    const book1Element = await screen.findByText("Test Book");
    expect(book1Element).toBeInTheDocument();

    const book2Element = await screen.findByText("Another Test Book");
    expect(book2Element).toBeInTheDocument();

    const book3Element = await screen.findByText("Third Test Book");
    expect(book3Element).toBeInTheDocument();
  });

  test("renders new book list and sets selected data based on navigation and date", async () => {
    const mockGetData = jest.spyOn(api, "getData").mockResolvedValueOnce(updatedData);

    render(
      <NavigationContext.Provider
        value={{ navigation: "CombinedPrintAndEBookFiction", setNavigationContext: jest.fn() }}
      >
        <DateContext.Provider value={{ date: "2023-01-01", setDateContext: jest.fn() }}>
          <BookList latestData={updatedData} />
        </DateContext.Provider>
      </NavigationContext.Provider>
    );

    await waitFor(() => {
      expect(mockGetData).toHaveBeenCalledWith("2023-01-01");
      expect(mockGetData).toHaveBeenCalledTimes(1);
    });

    const book1Element = await screen.findByText("New Book");
    expect(book1Element).toBeInTheDocument();

    mockGetData.mockRestore();
  });

  test("handles error when fetching data", async () => {
    const mockGetData = jest.spyOn(api, "getData").mockRejectedValueOnce(new Error("API Error"));
    const consoleErrorSpy = jest.spyOn(console, "error");

    render(
      <NavigationContext.Provider
        value={{ navigation: "CombinedPrintAndEBookFiction", setNavigationContext: jest.fn() }}
      >
        <DateContext.Provider value={{ date: "2023-01-01", setDateContext: jest.fn() }}>
          <BookList latestData={latestData} />
        </DateContext.Provider>
      </NavigationContext.Provider>
    );

    expect(mockGetData).toHaveBeenCalledWith("2023-01-01");
    expect(mockGetData).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching data:", expect.any(Error));
    });

    mockGetData.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  test("sets selectedData to null when latestData is null", async () => {
    render(
      <NavigationContext.Provider
        value={{ navigation: "CombinedPrintAndEBookFiction", setNavigationContext: jest.fn() }}
      >
        <DateContext.Provider value={{ date: null, setDateContext: jest.fn() }}>
          <BookList latestData={null} />
        </DateContext.Provider>
      </NavigationContext.Provider>
    );

    const errorMessage = await screen.findByText("Error to fetch lists, try again later.");
    expect(errorMessage).toBeVisible();
  });
});
