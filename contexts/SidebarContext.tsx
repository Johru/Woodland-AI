import React, { createContext, useState, useContext, ReactNode } from 'react';

const SidebarContext = createContext<
  { sidebar: string; toggleSidebar: (sidebarName: string) => void } | undefined
>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<string>('DefaultSidebar');

  const toggleSidebar = (sidebarName: string) => {
    setSidebar(sidebarName);
    console.log('toggleSidebar was triggered: ' + sidebarName);
  };

  return (
    <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)!;
