"use client";

import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { NavigationContext } from "../app/providers";
import { NavigationContextType } from "../types/context";

export const Navbar = () => {
  const { navigation, setNavigationContext } = useContext(NavigationContext) as NavigationContextType;

  const handleLinkClick = (key: string) => {
    setNavigationContext(key);
  };

  return (
    <nav className={styles.navbar}>
      <a
        key="fiction"
        className={navigation === "fiction" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("fiction")}
      >
        Fiction
      </a>
      <a
        key="non-fiction"
        className={navigation === "non-fiction" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("non-fiction")}
      >
        Non Fiction
      </a>
    </nav>
  );
};
