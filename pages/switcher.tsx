import React, { useEffect } from 'react';
import { SidebarButton } from '../components';
import { useSidebar } from '../contexts/SidebarContext';

export default function SwitcherPage() {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('DefaultSidebar');
  }, [toggleSidebar]);
  return (
    <div>
      <SidebarButton sidebarName="AISidebar">
        Switch to AI Sidebar
      </SidebarButton>
      <br />
      <br />
      <SidebarButton sidebarName="DefaultSidebar">
        Empty the Sidebar space
      </SidebarButton>
      <br />
      <br />
      <SidebarButton sidebarName="TurnControlSidebar">
        Switch to Turn Control
      </SidebarButton>

      <br />
    </div>
  );
}
