import React, { useEffect } from 'react';
import useFetchProfiles from '../../hooks/useFetchAIProfiles';
import { useSidebar } from '../../contexts/SidebarContext';

export default function AIList() {
  const [profiles, loading, error] = useFetchProfiles();

  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('AISidebar');
  }, [toggleSidebar]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profiles</div>;

  return (
    <div>
      <h1> Existing Bots </h1>
      <p>
        You can find existing bots here, including default ones. Create a new
        bot from the sidebar.
      </p>

      {profiles?.map((profile) => (
        <div key={profile.id}>{profile.name}</div>
      ))}
    </div>
  );
}
