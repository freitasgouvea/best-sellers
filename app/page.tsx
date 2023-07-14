import { getData } from "../api/data";
import { BookList } from "../components/BookList";

export default async function Page() {
  const latestData: any = await getData();

  return (
    <main>
      <BookList latestData={latestData} />
    </main>
  );
}
