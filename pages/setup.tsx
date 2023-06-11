import React, { useEffect, useState } from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import { useRouter } from 'next/router'
import { useContext } from 'react';
import {BoardContext} from '../contexts';

export default function GameSetupPage() {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  const { boardState, setBoardState } = useContext(BoardContext);
  useEffect(() => {
    toggleSidebar('DefaultSidebar');
  }, [toggleSidebar]);

  interface FormData {
    map: string;
    setupType: string;
  }

  const [formData, setFormData] = useState<FormData>({
    map: 'Autumn',
    setupType: 'adset',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const startNewGame = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    if (setBoardState && boardState) {
    setBoardState({
      ...boardState,
setupSettings: formData
    })
    console.log (boardState)
  }

    router.push('/board')
  };
  return (
    <div>
      <form onSubmit={startNewGame} className="formbox">
        <label htmlFor="map">Map</label>
        <select name="map" onChange={handleChange} value={formData.map}>
          <option>Autumn</option>
          <option>Winter</option>
          <option disabled>Lake</option>
          <option disabled>Mountain</option>
        </select>

        <label htmlFor="setupType">Type of setup</label>
        <select
          name="setupType"
          onChange={handleChange}
          value={formData.setupType}
        >
          <option value="adset">Advanced Setup</option>
          <option value="random">Random Factions</option>
          <option value="standard">Standard Setup</option>
        </select>

        <p></p>
        <p></p>
        <button type="submit">Start a new game</button>
      </form>
      <br />
    </div>
  );
}
