import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>Demystifying Lab</h1>
        <h3 className={styles.description}>
          Demystify Anything and Everything
        </h3>
      </div>
    </main>
  );
}
