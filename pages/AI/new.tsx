import React from 'react';
import useFetchProfiles from '../../hooks/useFetchAIProfiles';
import { useSidebar } from '../../contexts/SidebarContext';

export default function CreateNewAI() {
  useSidebar().toggleSidebar('AISidebar');

  return (
    <div>
      <h1> New bot </h1>
      <div className="formbox">
        <p>Faction:</p>
        <select name="factions" id="factions">
          <option value="cats" selected>
            Cats
          </option>
        </select>

        <p>Faction:</p>

      </div>
    </div>
  );
}
