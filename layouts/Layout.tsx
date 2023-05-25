import React from 'react';
import styles from '../styles/Layout.module.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['layout']}>
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className={styles['layout-content']}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
