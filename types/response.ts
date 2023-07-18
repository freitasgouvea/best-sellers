import { Book } from "./book";

export type OverviewResponse = {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    bestsellers_date: string;
    published_date: string;
    lists: {
      list_id: number;
      list_name: string;
      display_name: string;
      updated: string;
      list_image: string;
      books: Book[];
    }[];
  };
}
