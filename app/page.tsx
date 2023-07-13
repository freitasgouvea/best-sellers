import { BookCard } from "../components/BookCard";
import { getLatestData } from "../api/data";
import { Book } from "../types/book";

export default async function Page() {
  const data: any = await getLatestData();

  const dataFiction: Book[] = data ? data.results?.lists[0]?.books : undefined;

  return (
    <div className="book-list">{dataFiction && dataFiction.map((book, i) => <BookCard book={book} key={i} />)}</div>
  );
}
