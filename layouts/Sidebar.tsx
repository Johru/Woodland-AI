import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';
import { useSidebar } from '../contexts/SidebarContext';
import * as Sidebars from '../components/sidebars';
import { DefaultSidebar } from '../components/sidebars';

export default function Sidebar() {
  const { sidebar } = useSidebar();

  const SidebarComponent = (
    Sidebars as { [key: string]: React.ComponentType<any> }
  )[sidebar];

  return (
    <div className={styles['sidebar-wrapper']}>
      {SidebarComponent ? <SidebarComponent /> : <DefaultSidebar />}
    </div>
  );
}
