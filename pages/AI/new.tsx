import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSidebar } from '../../contexts/SidebarContext';

export default function CreateNewAI() {
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    toggleSidebar('AISidebar');
  }, [toggleSidebar]);

  const [formData, setFormData] = useState({
    faction: 'cats',
    placeholderBoolean: false,
    placeholderNumber1: 0,
    placeholderNumber2: 0,
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

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://app.tabidoo.cloud/api/v2/apps/woodlandai/tables/ai_profiles/data',
        formData,
        {
          headers: { Authorization: `Bearer ${process.env.DB_JWT}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1> New bot </h1>
      <form onSubmit={handleSubmit}>
        <div className="formbox">
          <label htmlFor="faction">Faction</label>
          <select
            name="faction"
            id="faction"
            value={formData.faction}
            onChange={handleChange}
          >
            <option value="cats">Cats</option>
            <option value="birds">Birds</option>
          </select>

          <label htmlFor="placeholderBoolean">Placeholder_boolean</label>
          <input
            type="checkbox"
            name="placeholderBoolean"
            checked={formData.placeholderBoolean}
            onChange={handleChange}
          />

          <label htmlFor="placeholderNumber1">Placeholder_number1</label>
          <input
            type="number"
            id="placeholderNumber1"
            name="placeholderNumber1"
            value={formData.placeholderNumber1}
            onChange={handleChange}
          />

          <label htmlFor="placeholderNumber2">Placeholder_number2</label>
          <input
            type="number"
            id="placeholderNumber2"
            name="placeholderNumber2"
            value={formData.placeholderNumber2}
            onChange={handleChange}
          />
          <span></span>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
