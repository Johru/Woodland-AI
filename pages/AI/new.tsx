import React, { useState } from 'react';
import axios from 'axios';

import { useSidebar } from '../../contexts/SidebarContext';

export default function CreateNewAI() {
  useSidebar().toggleSidebar('AISidebar');
  const [formData, setFormData] = useState({
    faction: '',
    placeholderBoolean: false,
    placeholderNumber1: 0,
    placeholderNumber2: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        headers: { Authorization: `Bearer ${process.env.DB_JWT}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1> New bot </h1>
      <form>
        <div className="formbox">
          <label htmlFor="faction">Faction</label>
          <select name="faction" id="faction">
            <option value="cats" selected>
              Cats
            </option>
          </select>

          <label htmlFor="placeholder-boolean">Placeholder_boolean</label>
          <input
            type="checkbox"
            name="placeholder-boolean"
            value="placeholder-boolean"
          />

          <label htmlFor="placeholder-number1">Placeholder_number1</label>
          <input
            type="number"
            id="placeholder-number1"
            name="placeholder-number1"
          />

          <label htmlFor="placeholder-number1">Placeholder_number2</label>
          <input
            type="number"
            id="placeholder-number2"
            name="placeholder-number2"
          />
          <span></span>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
