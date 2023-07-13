"use client";

import { SetStateAction, useState } from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("fiction");

  const handleLinkClick = (key: SetStateAction<string>) => {
    setActiveLink(key);
  };

  return (
    <nav className={styles.navbar}>
      <a
        key="fiction"
        className={activeLink === "fiction" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("fiction")}
      >
        Fiction
      </a>
      <a
        key="non-fiction"
        className={activeLink === "non-fiction" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("non-fiction")}
      >
        Non Fiction
      </a>
    </nav>
  );
};
