"use client";

import { useContext } from "react";
import styles from "../styles/Sidebar.module.css";
import { DateContext } from "../app/providers";
import { DateContextType } from "../types/context";

const years: number[] = [2020, 2021, 2022, 2023, 2024, 2025].reverse();
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Sidebar = () => {
  const { setDateContext } = useContext(DateContext) as DateContextType;

  const handleListClick = (key: string | null) => {
    setDateContext(key);
  };

  const currentYear: number = new Date().getFullYear();
  const currentMonth: number = new Date().getMonth() - 1;

  const renderedYears: React.JSX.Element[] = years
    .filter((year) => year <= currentYear)
    .map((year) => (
      <ul key={year} className={styles.sidebarlist}>
        <h2 className={styles.sidebarHeader}>{year}</h2>
        <div className={styles.sidebarRow}>
          {months
            .filter((month, index) => year < currentYear || index <= currentMonth)
            .reverse()
            .map((month) => (
              <li
                key={year + "-" + month}
                className={styles.sidebarItem}
                onClick={() => handleListClick(year + "-" + month + "-01")}
              >
                {month}
              </li>
            ))}
        </div>
      </ul>
    ));

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebarlist}>
        <div className={styles.sidebarRow}>
          <li className={styles.sidebarItem} onClick={() => handleListClick(null)}>
            Today
          </li>
        </div>
      </ul>
      {renderedYears}
    </aside>
  );
};
