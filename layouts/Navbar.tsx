import React from 'react';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles['nav-links']}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/AI">
          <a>Bots</a>
        </Link>
        <Link href="/setup">
          <a>New Game</a>
        </Link>
        <Link href="/board">
          <a>Game Board</a>
        </Link>
        <Link href="/switcher">
          <a>Sidebars</a>
        </Link>
      </div>
      <p className={styles['nav-user']}>Welcome, Placeholder User</p>
    </div>
  );
}
