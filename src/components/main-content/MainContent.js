import React from 'react';
import { Hero } from '../hero/Hero';

import styles from './MainContent.module.css';

export const MainContent = () => {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
};
