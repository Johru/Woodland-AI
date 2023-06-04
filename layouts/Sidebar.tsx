import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';
import { useSidebar } from '../contexts/SidebarContext';
import * as Sidebars from '../components/sidebars';
import { DefaultSidebar } from '../components/sidebars';

export default function Sidebar() {
  const { sidebar } = useSidebar();

  // non-typed version? const SidebarComponent = Sidebars[sidebar];
  const SidebarComponent = (
    Sidebars as { [key: string]: React.ComponentType<any> }
  )[sidebar];

  console.log(Sidebars);
  console.log('SidebarComponent:', SidebarComponent);
  console.log('Current sidebar state: ' + sidebar);

  return (
    <div className={styles['sidebar-wrapper']}>
      {SidebarComponent ? <SidebarComponent /> : <DefaultSidebar />}
    </div>
  );
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
