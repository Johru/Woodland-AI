import React from 'react';
import useFetchProfiles from '../../hooks/useFetchAIProfiles';
import { useSidebar } from '../../contexts/SidebarContext';

export default function AIList() {
  const [profiles, loading, error] = useFetchProfiles();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profiles</div>;
  useSidebar().toggleSidebar('AISidebar');

  return (
    <div>
      {profiles?.map((profile) => (
        <div key={profile.id}>{profile.name}</div>
      ))}
    </div>
  );
}
