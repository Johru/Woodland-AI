import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';
import { useSidebar } from '../contexts/SidebarContext';
import * as Sidebars from '../components/';
import {AISidebar} from '../components/sidebars';

export default function Sidebar() {
  const { sidebar } = useSidebar();

  // non-typed version? const SidebarComponent = Sidebars[sidebar];
  const SidebarComponent = (
    Sidebars as { [key: string]: React.ComponentType<any> }
  )[sidebar];

  return SidebarComponent ? <SidebarComponent /> : null;
}

//   return (
//     <div className={styles['sidebar-wrapper']}>
//       <SidebarComponent />
//     </div>
//   );
// }

// const router = useRouter();
// let SidebarComponent = DefaultSidebar;
// if (router.pathname.includes('/AI')) {
//   console.log('AI detected?');
//   SidebarComponent = AISidebar;
// }
