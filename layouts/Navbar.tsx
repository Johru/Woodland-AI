import React from 'react';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles['nav-links']}>
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <Link href="/AI">
          <a>AI Management</a>
        </Link>
        <Link href="/board">
          <a>Game Board</a>
        </Link>
        <Link href="/sdfds">
          <a>Placeholder 2</a>
        </Link>
        <Link href="/sfdsfdsf">
          <a>Placeholder 3</a>
        </Link>
      </div>
      <p className={styles['nav-user']}>Welcome, Placeholder User</p>
    </div>
  );
}
