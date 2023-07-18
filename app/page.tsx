import { OverviewResponse } from "types/response";
import { getData } from "../api/data";
import { BookList } from "../components/BookList";

export default async function Page() {
  const latestData: OverviewResponse | null = await getData();

  return (
    <main>
      <BookList latestData={latestData} />
    </main>
  );
}
