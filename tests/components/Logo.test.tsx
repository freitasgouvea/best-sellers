import { render } from "@testing-library/react";
import { Logo } from "../../components/Logo";

describe("Logo", () => {
  test("renders the logo with the correct size", () => {
    const size = 32;
    const { getByTestId } = render(<Logo size={size} />);
    const logoSvg = getByTestId("logo");

    expect(logoSvg).toBeInTheDocument();
    expect(logoSvg).toHaveAttribute("width", String(size));
    expect(logoSvg).toHaveAttribute("height", String(size));
  });
});
