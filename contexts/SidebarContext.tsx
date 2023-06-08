import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DefaultSidebar } from '../components/sidebars';

const SidebarContext = createContext<
  { sidebar: string; toggleSidebar: (sidebarName: string) => void } | undefined
>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<string>('DefaultSidebar');
  const [isLoading, setLoading] = useState<boolean>(true);

  const toggleSidebar = (sidebarName: string) => {
    setSidebar(sidebarName);
  };

  // if (isLoading) {
  //   return <DefaultSidebar />;
  // }
  return (
    <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)!;
