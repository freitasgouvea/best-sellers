import { render, screen } from "@testing-library/react";
import { SkeletonList } from "../../components/Skeleton";
import styles from "../styles/BookCard.module.css";

describe("Skeleton", () => {
  test("renders the skeleton cards with the correct styles", () => {
    render(<SkeletonList />);
    const skeletonCards = screen.getAllByTestId("skeleton-card");

    expect(skeletonCards).toHaveLength(15);
    skeletonCards.forEach((card) => {
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass("skeleton-loading");
      expect(card.firstChild).toHaveClass(styles.card);
    });
  });
});
