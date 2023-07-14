"use client";

import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DateContext } from "../app/providers";
import { DateContextType } from "../types/context";
import styles from "../styles/BookListHeader.module.css";

export const BookListHeader = () => {
  const { date, setDateContext } = useContext(DateContext) as DateContextType;

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
    return date ? date : "Today";
  };

  const calendarButton = <button className={styles.CalendarButton}>{renderSelectedDate()} ⌄</button>;

  return (
    <>
      <div className={styles.BookListHeader}>
        <h2>Featured Books</h2>
        <DatePicker
          todayButton="Latest Lists"
          minDate={new Date("2010-01-01")}
          maxDate={today}
          onChange={(pickedDate) => handleDateChange(pickedDate)}
          customInput={calendarButton}
          disabledKeyboardNavigation
          nextYearButtonLabel
        />
      </div>
    </>
  );
};
