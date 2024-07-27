import React from 'react';
import styles from './Footer.module.css';

export const LegalInfo = () => {
  return (
    <section className={styles.bottom}>
      <article>
        <p>
          © {new Date().getFullYear()} Demystifying Lab. All Right Reserved.
        </p>
      </article>
      <article>
        <p>
          Developed with <span style={{ color: '#ff1010' }}>&#x2764;</span> and{' '}
          <span>&#x1F91D;</span>
        </p>
      </article>
    </section>
  );
};
