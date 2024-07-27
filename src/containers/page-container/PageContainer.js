import React from 'react';
import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import styles from './PageContainer.module.css';

export const PageContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
