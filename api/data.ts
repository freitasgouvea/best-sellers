export async function getLatestData() {
  const apikey = process.env.NEXT_PUBLIC_NYT_API_KEY;

  // const date = new Date().toISOString().slice(0, 10);

  let response;
  
  await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?&api-key=${apikey}`, {
    "method": "GET",
    "headers": {
      "Accept": "application/json"
    },
  }).then(
    res => {response = res.json()}
  )
 
  //   if (!res.ok) {
  //     throw new Error(`Failed to fetch data ${date} ${apikey}`);
  //   }

  return response;
}