import { ReactNode } from 'react';
import { useSidebar } from '../contexts/SidebarContext';

function SidebarButton({
  sidebarName,
  children,
}: {
  sidebarName: string;
  children: ReactNode;
}) {
  const { toggleSidebar } = useSidebar();

  return <button onClick={() => toggleSidebar(sidebarName)}>{children}</button>;
}

export default SidebarButton;
