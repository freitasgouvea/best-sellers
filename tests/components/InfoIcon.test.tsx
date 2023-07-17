import { render, screen } from "@testing-library/react";
import { InfoIcon } from "../../components/InfoIcon";

describe("InfoIcon", () => {
  test("renders the 'up' icon", () => {
    render(<InfoIcon type="new" size={32} data-testid="info-icon" />);

    const infoIcon = screen.getByTestId("info-icon");

    expect(infoIcon).toBeInTheDocument();
  });

  test("renders the 'up' icon", () => {
    render(<InfoIcon type="up" size={32} data-testid="info-icon" />);

    const infoIcon = screen.getByTestId("info-icon");

    expect(infoIcon).toBeInTheDocument();
  });

  test("renders the 'down' icon", () => {
    render(<InfoIcon type="down" size={32} data-testid="info-icon" />);

    const infoIcon = screen.getByTestId("info-icon");

    expect(infoIcon).toBeInTheDocument();
  });

  test("renders the 'equal' icon", () => {
    render(<InfoIcon type="equal" size={32} data-testid="info-icon" />);

    const infoIcon = screen.getByTestId("info-icon");

    expect(infoIcon).toBeInTheDocument();
  });
});
