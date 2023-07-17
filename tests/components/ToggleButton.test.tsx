import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ToggleButton } from "../../components/ToggleButton";

jest.mock("next-themes");

describe("ToggleButton", () => {
  it("renders the toggle button with the correct initial theme icon", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: jest.fn(),
    });

    render(<ToggleButton />);
    const toggleButton = screen.getByRole("button");

    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent("🌞");
  });

  it("calls setTheme function when clicked", () => {
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: jest.fn(),
    });

    render(<ToggleButton />);
    const toggleButton = screen.getByRole("button");

    fireEvent.click(toggleButton);

    expect(useTheme().setTheme).toHaveBeenCalledTimes(1);
  });
});
