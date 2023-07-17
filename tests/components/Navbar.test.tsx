import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { NavigationContext } from "../../app/providers";
import { NavigationContextType } from "../../types/context";
import { weeklyBestSellersLists } from "../../config/lists";

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

  it("renders the navbar with the correct weekly lists", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    const navbarLinks = screen.getAllByTestId("navbar-link");

    expect(navbar).toBeInTheDocument();
    expect(navbarLinks).toHaveLength(Object.keys(weeklyBestSellersLists).length);
  });

  it("calls setNavigationContext when a navbar link is clicked", () => {
    render(<Navbar />);
    const navbarLink = screen.getByText(weeklyBestSellersLists.CombinedPrintAndEBookFiction.name);

    fireEvent.click(navbarLink);

    expect(setNavigationContextMock).toHaveBeenCalledTimes(1);
  });

  it("applies the active style to the current navigation link", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookFiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Navbar />);
    const activeNavbarLink = screen.getByText(weeklyBestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(activeNavbarLink).toHaveClass("navbarLinkActive");
  });

  it("applies the inactive style to other navigation links", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookNonfiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Navbar />);
    const inactiveNavbarLink = screen.getByText(weeklyBestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(inactiveNavbarLink).toHaveClass("navbarLink");
  });
});
