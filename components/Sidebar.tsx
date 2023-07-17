"use client";

import { useContext } from "react";
import styles from "../styles/Sidebar.module.css";
import { NavigationContext } from "../app/providers";
import { NavigationContextType } from "../types/context";
import { weeklyBestSellersLists } from "../config/lists";

export const Sidebar = () => {
  const { navigation, setNavigationContext } = useContext(NavigationContext) as NavigationContextType;

  const handleListClick = (key: string) => {
    setNavigationContext(key);
    window.scrollTo(0, 0);
  };

  return (
    <ul>
      <small>WEEKLY LISTS</small>
      {Object.entries(weeklyBestSellersLists).map(([key, value]) => (
        <li
          key={key}
          className={navigation === key ? styles.SidebarItemActive : styles.SidebarItem}
          onClick={() => handleListClick(key)}
        >
          {value.name}
        </li>
      ))}
    </ul>
  );
};
