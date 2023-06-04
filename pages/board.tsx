import React from 'react';
import Board from '../components/Board';
import { useSidebar } from '../contexts/SidebarContext';

export default function BoardPage() {
  useSidebar().toggleSidebar('TurnControlSidebar');
  return <Board />;
}
