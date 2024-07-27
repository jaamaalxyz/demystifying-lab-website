import React from 'react';
import { PageContainer } from '@/containers/page-container/PageContainer';
import styles from './About.module.css';

export default function index() {
  return (
    <PageContainer>
      <div className={styles.content}>About</div>
    </PageContainer>
  );
}
