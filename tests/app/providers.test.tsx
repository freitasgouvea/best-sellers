import React from "react";
import { act, render, screen } from "@testing-library/react";
import Providers, { NavigationContext, DateContext } from "../../app/providers";

describe("Providers", () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  test("renders children with NavigationContext and DateContext", () => {
    const MockChild = () => (
      <div>
        <NavigationContext.Consumer>
          {(navigationContext) => <span data-testid="navigation">{navigationContext?.navigation}</span>}
        </NavigationContext.Consumer>
        <DateContext.Consumer>
          {(dateContext) => <span data-testid="date">{dateContext?.date}</span>}
        </DateContext.Consumer>
      </div>
    );

    act(() => {
      render(
        <Providers>
          <MockChild />
        </Providers>
      );
    });

    const navigationElement = screen.getByTestId("navigation");
    const dateElement = screen.getByTestId("date");

    expect(navigationElement.textContent).toBe("CombinedPrintAndEBookFiction");
    expect(dateElement.textContent).toBe("");
  });

  test("updates NavigationContext value", () => {
    const MockChild = () => {
      const navigationContext = React.useContext(NavigationContext);

      const handleClick = () => {
        navigationContext?.setNavigationContext("HardcoverFiction");
      };

      return (
        <div>
          <button onClick={handleClick}>Change Navigation</button>
          <span data-testid="navigation">{navigationContext?.navigation}</span>
        </div>
      );
    };

    act(() => {
      render(
        <Providers>
          <MockChild />
        </Providers>
      );
    });

    const buttonElement = screen.getByText("Change Navigation");
    const navigationElement = screen.getByTestId("navigation");

    expect(navigationElement.textContent).toBe("CombinedPrintAndEBookFiction");

    act(() => {
      buttonElement.click();
    });

    expect(navigationElement.textContent).toBe("HardcoverFiction");
  });

  test("updates DateContext value", () => {
    const MockChild = () => {
      const dateContext = React.useContext(DateContext);

      const handleClick = () => {
        dateContext?.setDateContext("2023-07-16");
      };

      return (
        <div>
          <button onClick={handleClick}>Change Date</button>
          <span data-testid="date">{dateContext?.date}</span>
        </div>
      );
    };

    act(() => {
      render(
        <Providers>
          <MockChild />
        </Providers>
      );
    });

    const buttonElement = screen.getByText("Change Date");
    const dateElement = screen.getByTestId("date");

    expect(dateElement.textContent).toBe("");

    act(() => {
      buttonElement.click();
    });

    expect(dateElement.textContent).toBe("2023-07-16");
  });
});
