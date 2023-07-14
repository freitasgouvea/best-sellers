"use client";

import { useContext } from "react";
import styles from "../styles/Sidebar.module.css";
import { DateContext } from "../app/providers";
import { DateContextType } from "../types/context";

interface Month {
  number: string;
  name: string;
}

const years: number[] = [2020, 2021, 2022, 2023, 2024, 2025].reverse();

const months: Month[] = [
  { number: "01", name: "January" },
  { number: "02", name: "February" },
  { number: "03", name: "March" },
  { number: "04", name: "April" },
  { number: "05", name: "May" },
  { number: "06", name: "June" },
  { number: "07", name: "July" },
  { number: "08", name: "August" },
  { number: "09", name: "September" },
  { number: "10", name: "October" },
  { number: "11", name: "November" },
  { number: "12", name: "December" },
];

export const Sidebar = () => {
  const { setDateContext } = useContext(DateContext) as DateContextType;

  const handleListClick = (key: string | null) => {
    setDateContext(key);
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() - 1;

  const renderedYears = years
    .filter((year) => year <= currentYear)
    .map((year) => (
      <ul key={year} className={styles.sidebarlist}>
        <h2 className={styles.sidebarHeader}>{year}</h2>
        <div className={styles.sidebarRow}>
          {months
            .filter((_month, index) => year < currentYear || index <= currentMonth)
            .reverse()
            .map((month) => (
              <li
                key={`${year}-${month.number}`}
                className={styles.sidebarItem}
                onClick={() => handleListClick(`${year}-${month.number}-01`)}
              >
                {month.name}
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
