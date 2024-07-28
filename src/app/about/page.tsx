import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>ABOUT US</h1>
      <p>
        Welcome to the official explorer for The New York Best Sellers list
        explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </section>
  );
}
