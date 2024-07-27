import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const CompanyInfo = () => {
  return (
    <article className={styles.company}>
      <header>
        <h2>Company</h2>
        <ul>
          <li className={styles.link_item}>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li className={styles.link_item}>
            <Link href={'/about'}>About</Link>
          </li>
          <li className={styles.link_item}>
            <Link href={'/about#contact'}>Contact</Link>
          </li>
        </ul>
      </header>
      <div>
        <h3>Stay Connected</h3>
        <div className={styles.social}>
          <Link href={'https://www.facebook.com/demystifyinglab/'}>
            <FaFacebookF size={25} />
          </Link>
          <Link href={'https://www.instagram.com/demystifyinglab/'}>
            <FaInstagram size={25} />
          </Link>
          <Link href={'https://x.com/DemystifyingLab'}>
            <FaXTwitter size={25} />
          </Link>
          <Link href={'https://linkedin.com/'}>
            <FaLinkedinIn size={25} />
          </Link>
          <Link href={'https://github.com/demystifying-lab'}>
            <FaGithub size={25} />
          </Link>
          <Link href={'https://www.youtube.com/@DemystifyingLab'}>
            <FaYoutube size={25} />
          </Link>
        </div>
      </div>
    </article>
  );
};
