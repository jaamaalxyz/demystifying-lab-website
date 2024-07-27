import React from 'react';
import Image from 'next/image';

import styles from './Featured.module.css';

export const Featured = () => {
  return (
    <div className={styles.card}>
      <Image
        src={'/cover.png'}
        alt="Demystifying Lab Logo"
        width={400}
        height={220}
      />
      <div className={styles.card_details}>
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
