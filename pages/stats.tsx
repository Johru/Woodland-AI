import React, { useEffect } from 'react';
import { useSidebar } from '../contexts/SidebarContext';

export function StatsPage() {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('DefaultSidebar');
  }, []);
  return (
    <div>
     <h1>Game statistics</h1>

   
    </div>
  );
}
