/* page.js va faire référence à "/"" sans qu’on n’ait besoin de le spécifier */

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello Next</h1>
    </main>
  );
}
