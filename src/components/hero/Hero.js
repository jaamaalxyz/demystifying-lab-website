import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.png"
        alt="Demystifying Lab Logo"
        width={75}
        height={75}
        priority={true}
        className={styles.logo}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: '0.5rem',
        }}
      >
        <h1 className={styles.title}>Demystifying Lab</h1>
        <h3 className={styles.subtitle}>
          Make Difference through Small Changes
        </h3>
        <h2 className={styles.tagline}>এখন সবকিছু শেখা হবে আরও সহজে</h2>
      </div>
      <Link href="/blog" className={styles.cta_button}>
        চলুন শুরু করি
      </Link>
    </div>
  );
};
