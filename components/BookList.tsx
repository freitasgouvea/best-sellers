"use client";

import { useContext, useMemo, useState } from "react";
import styles from "../styles/BookList.module.css";
import { Book } from "../types/book";
import { BookCard } from "./BookCard";
import { DateContext, NavigationContext } from "../app/providers";
import { DateContextType, NavigationContextType } from "../types/context";
import { getData } from "../api/data";
import { SkeletonList } from "./Skeleton";
import { Navbar } from "./Navbar";
import { BookListHeader } from "./BookListHeader";
import { bestSellersLists } from "../config/lists";
import { OverviewResponse } from "types/response";

interface BookListProps {
  latestData: OverviewResponse | null;
}

export const BookList = ({ latestData }: BookListProps) => {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  const { date } = useContext(DateContext) as DateContextType;

  const [data, setData] = useState<OverviewResponse | null>(latestData);
  const [selectedData, setSelectedData] = useState<Book[] | null>(
    latestData ? latestData.results?.lists[0]?.books : null
  );
  const [loading, setLoading] = useState<boolean>(false);

  useMemo(async () => {
    try {
      if (date) {
        setLoading(true);
        const fetchedData = await getData(date);
        setData(fetchedData);
        setLoading(false);
      } else {
        setData(latestData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [date]);

  useMemo(() => {
    const id = bestSellersLists[navigation]?.id;
    if (data !== undefined && id) {
      const selectedList = data?.results?.lists.find((item) => item.list_id === id);
      if (selectedList) {
        setSelectedData(selectedList["books"]);
      }
    }
    return;
  }, [navigation, data]);

  return (
    <>
      <BookListHeader />
      <Navbar />
      <div className={styles.bookList}>
        {loading && <SkeletonList />}
        {!loading && selectedData && selectedData.map((book, i) => <BookCard book={book} key={i} />)}
        {!selectedData && <p>Error to fetch lists, try again later.</p>}
      </div>
    </>
  );
};
