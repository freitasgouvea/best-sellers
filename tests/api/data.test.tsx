import { getData } from "../../api/data";

describe("getData", () => {
  test("fetches data from the API", async () => {
    const mockResponse = { data: "test data" };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getData("2023-07-01");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=undefined&published_date=2023-07-01",
      expect.objectContaining({
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
    );

    expect(result).toEqual(mockResponse);
  });

  test("handles error when API request fails", async () => {
    const mockFetchPromise = Promise.resolve({
      ok: false,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getData("2023-07-01");

    expect(result).toBeNull();
  });
});
