import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Demystifying Lab Logo"
          width={75}
          height={75}
          priority
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            margin: '1rem 0',
            filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)',
            borderRadius: '50%',
          }}
        />
        <h1 className={styles.title}>Demystifying Lab</h1>
        <h3 className={styles.description}>
          Demystify Anything and Everything
        </h3>
        <div style={{ padding: '1rem 0' }} />
        <h2>এখন সবকিছু শেখা হবে আরও সহজে</h2>
      </div>
    </main>
  );
}
