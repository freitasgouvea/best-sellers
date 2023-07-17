import { render, screen } from "@testing-library/react";
import { Wishlist } from "../../components/Wishlist";
import styles from "../styles/Wishlist.module.css";

describe("Wishlist", () => {
  test("renders the wishlist heading", () => {
    render(<Wishlist />);
    const wishlistHeading = screen.getByRole("heading", { name: /My Wishlist/i });

    expect(wishlistHeading).toBeInTheDocument();
  });
});
