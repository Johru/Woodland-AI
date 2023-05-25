import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';
import { AISidebar, DefaultSidebar } from '../components';

export default function Sidebar() {
  const router = useRouter();
  let SidebarComponent = DefaultSidebar;
  if (router.pathname.includes('/ai')) {
    console.log('AI detected?');
    SidebarComponent = AISidebar;
  }
  return (
    <div className={styles['sidebar-wrapper']}>
      <SidebarComponent />
    </div>
  );
}
