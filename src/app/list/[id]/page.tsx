import { Books } from "@/model/type";

async function getBooks(id: string): Promise<Books> {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();

  return json.results;
}

export default async function List({
  params: { id },
}: {
  params: { id: string };
}) {
  const books = await getBooks(id);

  return <h1>{id}</h1>;
}
