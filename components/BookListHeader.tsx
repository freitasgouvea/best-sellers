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

  const calendarButton = <button className={styles.calendarButton}>{renderSelectedDate()} ⌄</button>;

  return (
    <>
      <div className={styles.bookListHeader}>
        <div>
          <h4 className={styles.bookListHeaderTitleDesktop}>Featured Books</h4>
          <h2 className={styles.bookListHeaderTitleDesktop}>{title}</h2>
        </div>
        <div className={styles.calendarButtonContainer}>
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
      </div>
    </>
  );
};
