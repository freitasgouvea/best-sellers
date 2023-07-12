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
      <a
        key="business"
        className={activeLink === "business" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("business")}
      >
        Business
      </a>
      <a
        key="young-adults"
        className={activeLink === "young-adults" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("young-adults")}
      >
        Young
      </a>
      <a
        key="children"
        className={activeLink === "children" ? styles.navbarLinkActive : styles.navbarLink}
        href="#"
        onClick={() => handleLinkClick("children")}
      >
        Child
      </a>
    </nav>
  );
};
