"use client";

import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DateContext, NavigationContext } from "../app/providers";
import { DateContextType, NavigationContextType } from "../types/context";
import styles from "../styles/BookListHeader.module.css";
import { bestSellersLists } from "../config/lists";

export const BookListHeader = () => {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  const { date, setDateContext } = useContext(DateContext) as DateContextType;

  const title = bestSellersLists[navigation]?.name;

  const today = new Date();

  const isSameDay = (dateA: Date, dateB: Date): boolean => {
    return (
      dateA.getDate() === dateB.getDate() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getFullYear() === dateB.getFullYear()
    );
  };

  const handleDateChange = (pickedDate: Date | null) => {
    if (pickedDate && !isSameDay(pickedDate, today)) {
      const pickedDateString = pickedDate.toISOString().slice(0, 10);
      setDateContext(pickedDateString);
    } else {
      setDateContext(null);
    }
  };

  const renderSelectedDate = (): string => {
    return date ? date : "Latest List";
  };

  const calendarButton = <button className={styles.CalendarButton}>{renderSelectedDate()} ⌄</button>;

  return (
    <>
      <div className={styles.BookListHeader}>
        <div>
        <h1 className={styles.BookListHeaderSubTitleDesktop}>The New York Times Best Sellers</h1>
          <h3 className={styles.BookListHeaderTitleDesktop}>{title}</h3>
          <h2 className={styles.BookListHeaderTitleMobile}>The New York Times Best Sellers</h2>
        </div>
        <DatePicker
          todayButton="Today"
          minDate={new Date("2010-01-01")}
          maxDate={today}
          onChange={(pickedDate) => handleDateChange(pickedDate)}
          customInput={calendarButton}
          disabledKeyboardNavigation
          nextYearButtonLabel
          showYearDropdown
        />
      </div>
    </>
  );
};
