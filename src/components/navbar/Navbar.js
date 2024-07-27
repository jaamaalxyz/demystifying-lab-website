import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.logo_wrapper}>
          <Image
            src={Logo}
            alt="Demystifying Lab"
            priority
            width={50}
            height={50}
            className={styles.logo}
          />
        </Link>

        <div className={styles.list}>
          <Link href={'/'} className={styles.nav_link}>
            Home
          </Link>
          <Link href={'/blog'} className={styles.nav_link}>
            Blog
          </Link>
          <Link href={'/about'} className={styles.nav_link}>
            About
          </Link>
        </div>
      </div>
    </navbar>
  );
};
