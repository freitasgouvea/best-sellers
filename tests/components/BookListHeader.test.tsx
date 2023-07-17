import { render, screen, fireEvent } from "@testing-library/react";
import { DateContext, NavigationContext } from "../../app/providers";
import { BookListHeader } from "../../components/BookListHeader";

const testDateFormatted = new Date().toISOString().slice(0, 10);

describe("BookListHeader", () => {
  const navigationContextValue = {
    navigation: "CombinedPrintAndEBookFiction",
    setNavigationContext: jest.fn(),
  };

  const dateContextValue = {
    date: testDateFormatted,
    setDateContext: jest.fn(),
  };

  beforeEach(() => {
    render(
      <NavigationContext.Provider value={navigationContextValue}>
        <DateContext.Provider value={dateContextValue}>
          <BookListHeader />
        </DateContext.Provider>
      </NavigationContext.Provider>
    );
  });

  test("renders the title correctly", () => {
    const titleElement = screen.getByText("Combined Print & E-Book Fiction");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the date picker correctly", () => {
    const datePickerElement = screen.getByRole("button");
    expect(datePickerElement).toBeInTheDocument();
  });

  test("calls setDateContext with the picked date when the date changes", () => {
    const datePickerButton = screen.getByRole("button");
    fireEvent.click(datePickerButton);

    const dayElement = screen.getAllByText("1")[0];
    fireEvent.click(dayElement);

    const selectedDateFormatted = testDateFormatted.slice(0, -2) + "01";
    expect(dateContextValue.setDateContext).toHaveBeenCalledWith(selectedDateFormatted);
  });

  test("calls setDateContext with null when select today", () => {
    const datePickerButton = screen.getByRole("button");
    fireEvent.click(datePickerButton);

    const dayElement = screen.getByText("Today");
    fireEvent.click(dayElement);

    expect(dateContextValue.setDateContext).toHaveBeenCalledWith(null);
  });
});
