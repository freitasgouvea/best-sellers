import styles from "../styles/Sidebar.module.css";

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
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() - 1;

  const renderedYears = years
    .filter((year) => year <= currentYear)
    .map((year) => (
      <ul key={year} className={styles.sidebarlist}>
          <h2 className={styles.sidebarHeader}>{year}</h2>
          <div className={styles.sidebarRow}>
          {months
            .filter((month, index) => year < currentYear || index <= currentMonth)
            .reverse()
            .map((month) => (
              <li key={year + "-" + month} className={styles.sidebarItem}>
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
          <li className={styles.sidebarItem}>Today</li>
        </div>
      </ul>
      {renderedYears}
    </aside>
  );
};
