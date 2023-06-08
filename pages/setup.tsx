import React, { useEffect } from 'react';
import { useSidebar } from '../contexts/SidebarContext';

export default function GameSetupPage() {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('DefaultSidebar');
  }, [toggleSidebar]);
  return (
    <div>
      New Game setup goes here
      <br />
    </div>
  );
}
