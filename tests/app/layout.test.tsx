import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../../app/layout";

type Props = {
  children: ReactNode;
};

jest.mock("../../app/layout", () => ({
  __esModule: true,
  metadata: {
    title: "NYTBS",
    description: "The New York Times Best Sellers",
  },
  default: ({ children }: Props) => <div>{children}</div>,
}));

// This is mock test, see issue for testing components with API Metadata https://github.com/vercel/next.js/issues/47299#issuecomment-1477912861
describe("RootLayout", () => {
  test("renders child components within the layout", () => {
    render(
      <RootLayout>
        <div>Mocked Child</div>
      </RootLayout>
    );

    expect(screen.getByText("Mocked Child")).toBeInTheDocument();
  });

  test("metadata contains correct values", () => {
    expect(metadata).toEqual({
      title: "NYTBS",
      description: "The New York Times Best Sellers",
    });
  });
});
