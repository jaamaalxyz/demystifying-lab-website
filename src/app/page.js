import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.center}>
      <Image
        src="/logo.png"
        alt="Demystifying Lab Logo"
        width={75}
        height={75}
        priority
        className={styles.logo}
      />
      <h1 className={styles.title}>Demystifying Lab</h1>
      <h3 className={styles.subtitle}>Demystify Anything and Everything</h3>
      <p className={styles.tagline}>এখন সবকিছু শেখা হবে আরও সহজে</p>
      <Link href="/blog" className={styles.cta_button}>
        পড়া শুরু করুন
      </Link>
    </div>
  );
};

const Featured = () => {
  return (
    <div className={styles.card}>
      <Image
        src={'/cover.png'}
        alt="Demystifying Lab Logo"
        width={400}
        height={220}
      />
      <div className={styles.card_body}>
        <h3>এখন সবকিছু শেখা হবে আরও সহজে</h3>
        <p>
          বর্তমান সময়ে যেকোনো বিষয়ে উন্মুক্ত জ্ঞানের ছড়াছড়ি থাকলেও, সহজপাঠ্য
          উপস্থাপনার অভাব এখনো বিদ্যমান। এই সমস্যার সমাধান করতেই{' '}
          <strong>Demystifying Lab | ডিমিস্টিফাইং ল্যাব</strong> এর জন্ম।
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Featured />
    </main>
  );
}
