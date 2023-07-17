"use client";

import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { NavigationContext } from "../app/providers";
import { NavigationContextType } from "../types/context";
import { weeklyBestSellersLists } from "../config/lists";

export const Navbar = () => {
  const { navigation, setNavigationContext } = useContext(NavigationContext) as NavigationContextType;

  const handleLinkClick = (key: string) => {
    setNavigationContext(key);
  };

  return (
    <nav className={styles.navbar}>
      {Object.entries(weeklyBestSellersLists).map(([key, value]) => (
        <a
          key={key}
          className={navigation === key ? styles.navbarLinkActive : styles.navbarLink}
          onClick={() => handleLinkClick(key)}
          data-testid="navbar-link"
        >
          {value.name}
        </a>
      ))}
    </nav>
  );
};
