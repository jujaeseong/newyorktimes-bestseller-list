import styles from "./home.module.css";
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
      <section className={styles.section}>
        <h1 className={styles.title}>
          <span className={styles.word}>THE</span>
          <span className={styles.word}>NEW</span>
          <span className={styles.word}>YORK</span>
          <span className={styles.word}>TIMES</span>
          <span className={styles.word}>BEST</span>
          <span className={styles.word}>SELLERS</span>
          <span className={styles.word}>EXPLORER</span>
        </h1>
        <ul className={styles.list}>
          {bookLists.map((category) => (
            <Link
              key={category.list_name}
              href={`/list/${category.list_name_encoded}`}
            >
              <li className={styles.category}>{category.display_name} →</li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
