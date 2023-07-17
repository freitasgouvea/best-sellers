import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { Sidebar } from "../../components/Sidebar";
import { NavigationContextType } from "../../types/context";
import { weeklyBestSellersLists } from "../../config/lists";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Sidebar", () => {
  const setNavigationContextMock = jest.fn();

  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue({
      navigation: "",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
  });

  test("renders the sidebar with the correct list", () => {
    render(<Sidebar />);
    const sidebar = screen.getByRole("list");
    const sidebarItems = screen.getAllByRole("listitem");

    expect(sidebar).toBeInTheDocument();
    expect(sidebarItems).toHaveLength(Object.keys(weeklyBestSellersLists).length);
  });

  test("applies the active style to the current navigation item", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookFiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Sidebar />);
    const activeListItem = screen.getByText(weeklyBestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(activeListItem).toHaveClass("SidebarItemActive");
  });

  test("applies the inactive style to other navigation items", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookNonfiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    render(<Sidebar />);
    const inactiveListItem = screen.getByText(weeklyBestSellersLists.CombinedPrintAndEBookFiction.name);

    expect(inactiveListItem).toHaveClass("SidebarItem");
  });

  test("update navigation context and scrolls to the top when a list item is clicked", () => {
    (useContext as jest.Mock).mockReturnValueOnce({
      navigation: "CombinedPrintAndEBookFiction",
      setNavigationContext: setNavigationContextMock,
    } as NavigationContextType);
    window.scrollTo = jest.fn();
    render(<Sidebar />);

    fireEvent.click(screen.getByText("Combined Print & E-Book Nonfiction"));

    expect(setNavigationContextMock).toHaveBeenCalledWith("CombinedPrintAndEBookNonfiction");
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
