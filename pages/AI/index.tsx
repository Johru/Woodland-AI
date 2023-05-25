import React from 'react';
import useFetchProfiles from '../../hooks/useFetchAIProfiles';

export default function AIList() {
  const [profiles, loading, error] = useFetchProfiles();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profiles</div>;

  return (
    <div>
      {profiles?.map((profile) => (
        <div key={profile.id}>
          {profile.name}
          {/* render the rest of the profile properties here */}
        </div>
      ))}
    </div>
  );
}
