import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { NavigationContextType } from "../../types/context";
import { bestSellersLists } from "../../config/lists";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Navbar", () => {
  const setNavigationContextMock = jest.fn();

  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue({
      navigation: "",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
  });

  test("renders the navbar with the correct lists", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    const navbarLinks = screen.getAllByTestId("navbar-link");

    expect(navbar).toBeInTheDocument();
    expect(navbarLinks).toHaveLength(Object.keys(bestSellersLists).length);
  });

  test("calls setNavigationContext when a navbar link is clicked", () => {
    render(<Navbar />);
    const navbarLink = screen.getByText(bestSellersLists.CombinedPrintAndEBookFiction.name);

    fireEvent.click(navbarLink);

    expect(setNavigationContextMock).toHaveBeenCalledTimes(1);
  });

  test("applies the active style to the current navigation link", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookFiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Navbar />);
    const activeNavbarLink = screen.getByText(bestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(activeNavbarLink).toHaveClass("navbarLinkActive");
  });

  test("applies the inactive style to other navigation links", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookNonfiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Navbar />);
    const inactiveNavbarLink = screen.getByText(bestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(inactiveNavbarLink).toHaveClass("navbarLink");
  });
});
