import { OverviewResponse } from "types/response";

const apikey = process.env.NEXT_PUBLIC_NYT_API_KEY;

export async function getData(date?: string): Promise<OverviewResponse | null> {
  let url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apikey}`;

  if (date) {
    url += `&published_date=${date}`;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
