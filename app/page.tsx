import { getData } from "../api/data";
import { Navbar } from "../components/Navbar";
import { BookList } from "../components/BookList";

export default async function Page() {
  const latestData: any = await getData();

  return (
    <main>
      <Navbar />
      <BookList latestData={latestData} />
    </main>
  );
}
