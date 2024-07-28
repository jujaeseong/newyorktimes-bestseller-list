import { BookLists } from "@/model/type";
import Link from "next/link";

async function getBookLists(): Promise<BookLists[]> {
  const response = await fetch(
    "https://books-api.nomadcoders.workers.dev/lists"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();

  return json.results;
}

export default async function Home() {
  const bookLists = await getBookLists();

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {bookLists.map((category) => (
          <li key={category.list_name}>
            <Link href={`/list/${category.list_name_encoded}`}>
              {category.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
