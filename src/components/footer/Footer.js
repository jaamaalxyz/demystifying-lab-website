import React from 'react';
import { OrgInfo } from './OrgInfo';
import { LegalInfo } from './LegalInfo';
import { CompanyInfo } from './CompanyInfo';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <OrgInfo />
        <CompanyInfo />
      </section>
      <LegalInfo />
    </footer>
  );
};
