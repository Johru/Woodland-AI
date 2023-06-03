import { useSidebar } from '../contexts/SidebarContext';

function SidebarButton({ sidebarName }: { sidebarName: string }) {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={() => toggleSidebar(sidebarName)}>
      Switch to {sidebarName} sidebar
    </button>
  );
}

export default SidebarButton;
