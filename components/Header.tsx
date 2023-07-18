import styles from "../styles/Header.module.css";
import { Logo } from "./Logo";
import { ToggleButton } from "./ToggleButton";

export const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerLogo}>
        <Logo size={32} />
        <h2 className={styles.headerTitle}>The New York Times Best Sellers</h2>
      </div>
      <div className={styles.headerRightContent}>
        <ToggleButton />
      </div>
    </header>
  );
};
