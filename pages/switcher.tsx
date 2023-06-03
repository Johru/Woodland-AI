import React from 'react';
import SidebarButton from '../components';

export default function SwitcherPage() {
  return (
    <div>
      <SidebarButton sidebarName="AiSidebar" />
      <br />
      <SidebarButton sidebarName="DefaultSidebar" />
      <br />
      <button>Switch to GameSetupSidebar</button>
      <br />
      <button>Switch to TurnSetup Sidebar</button>
      <br />
      <button>Switch to Daylight Sidebar</button>
      <br />
    </div>
  );
}
