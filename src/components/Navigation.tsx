"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${path === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.link} ${
              path === "/about" ? styles.active : ""
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
