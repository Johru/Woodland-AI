import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSidebar } from '../../contexts/SidebarContext';

export default function CreateNewAI() {
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    toggleSidebar('AISidebar');
  }, [toggleSidebar]);

  const [formData, setFormData] = useState({
    string: 'cats',
    number: 0,
  });
  const [meesage, setMeesage] = useState('');

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
        'https://app.tabidoo.cloud/api/v2/apps/woodlandai/tables/test/data',
        { fields: { ...formData, number: Number(formData.number) } },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_DB_JWT}`,
          },
        }
      );
      console.log(response.data);
    } catch (error: any) {
      console.error(error);
      setMeesage(error.message);
    }
  };
  return (
    <div>
      <h1> New bot </h1>
      <form onSubmit={handleSubmit}>
        <div className="formbox">
          <label htmlFor="string">String</label>
          <input
            type="text"
            id="string"
            name="string"
            value={formData.string}
            onChange={handleChange}
          />
          <label htmlFor="number">number</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />

          <p></p>
          <button>Submit</button>
        </div>
      </form>

      <p>{meesage}</p>
    </div>
  );
}
