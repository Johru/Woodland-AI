import React, { useEffect } from 'react';
import {BoardComponent} from '../components';
import { useSidebar } from '../contexts/SidebarContext';

export default function BoardPage() {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('TurnControlSidebar');
  }, [toggleSidebar]);
  return <BoardComponent />;
}
