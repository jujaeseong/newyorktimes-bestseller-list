import styles from "./bookList.module.css";
import { Books } from "@/model/type";
import Image from "next/image";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const books = await getBooks(id);
  return {
    title: books.display_name,
  };
}

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

export default async function BookList({ params: { id } }: IParams) {
  const books = await getBooks(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{books.display_name}</h1>
      <ul className={styles.list}>
        {books.books.map((book) => (
          <li key={book.title} className={styles.item}>
            <div className={styles.imageBox}>
              <Image
                fill
                src={book.book_image}
                alt={book.title}
                className={styles.image}
              />
            </div>
            <div className={styles.descriptionBox}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <h3 className={styles.authorName}>{book.author}</h3>
              <a
                href={book.amazon_product_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyButton}
              >
                Buy now →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
