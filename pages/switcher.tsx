import React from 'react';
import { SidebarButton } from '../components';

export default function SwitcherPage() {
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
