"use client";

import { useContext, useMemo, useState } from "react";
import styles from "../styles/BookList.module.css";
import { Book } from "../types/book";
import { BookCard } from "./BookCard";
import { DateContext, NavigationContext } from "../app/providers";
import { DateContextType, NavigationContextType } from "../types/context";
import { getData } from "../api/data";
import { SkeletonList } from "./Skeleton";

interface BookListProps {
  latestData: any;
}

export const BookList = ({ latestData }: BookListProps) => {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  const { date } = useContext(DateContext) as DateContextType;

  const [data, setData] = useState<any>(latestData);
  const [selectedData, setSelectedData] = useState<Book[]>(latestData.results?.lists[0]?.books);
  const [loading, setLoading] = useState<boolean>(false);

  useMemo(async () => {
    if (date) {
      setLoading(true);
      const fetchedData = await getData(date);
      setData(fetchedData);
      setLoading(false);
    } else {
      setData(latestData);
    }
  }, [date]);

  useMemo(() => {
    switch (navigation) {
      case "fiction":
        setSelectedData(data?.results?.lists[0]?.books);
        break;
      case "non-fiction":
        setSelectedData(data?.results?.lists[1]?.books);
        break;
      default:
        break;
    }
  }, [navigation, data]);

  return (
    <>
      <h2>Featured Books {date ? date : "Today"}</h2>
      <div className={styles.bookList}>
        {loading && <SkeletonList />}
        {!loading && selectedData && selectedData.map((book, i) => <BookCard book={book} key={i} />)}
      </div>
    </>
  );
};
