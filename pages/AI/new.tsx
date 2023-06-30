import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import styles from '../../styles/Form.module.scss'

import { useSidebar } from '../../contexts/SidebarContext';

export default function CreateNewAI() {
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    toggleSidebar('AISidebar');
  }, [toggleSidebar]);

  const [error, setError] = useState('');
  interface FormData {
    faction: string;
    leader: string;
    placeholder_boolean: boolean;
    placeholder_number1: number;
    placeholder_number2: number;
    user_id: number;
  }

  const [formData, setFormData] = useState<FormData>({
    faction: 'cats',
    leader: 'defaultLeader',
    placeholder_boolean: true,
    placeholder_number1: 0,
    placeholder_number2: 0,
    user_id: 1,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const value =
      target.type === 'checkbox'
        ? target.checked
        : target.value;
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
        {
          fields: {
            ...formData,
            placeholder_number1: Number(formData.placeholder_number1),
            placeholder_number2: Number(formData.placeholder_number2),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_DB_JWT}`,
          },
        }
      );
      setError('');
      console.log(response.data.data.fields);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError;
        if (serverError && serverError.response) {
          if (
            typeof serverError.response.data === 'object' &&
            serverError.response.data !== null
          ) {
            console.error(serverError.response.data);
            setError(
              (serverError.response.data as { message?: string }).message ||
                'Unknown server error'
            );
          } else {
            setError('Unknown server error');
          }
        }
      } else if (error instanceof Error) {
        console.error(error.message);
        setError(error.message);
      } else {
        console.error(error);
        setError('An unknown error occurred');
      }
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
            value={formData.faction}
            onChange={handleChange}
          >
            <option value="cats">Cats</option>
            <option value="birds">Birds</option>
          </select>

          <label htmlFor="placeholder_boolean"> Placeholder_boolean </label>

          <div className={styles["css-checkbox-wrapper"]}>
		    
            <input  type="checkbox"
              name="placeholder_boolean"
              className={styles["css-checkbox"]}
              checked={formData.placeholder_boolean}
              onChange={handleChange}
            />
              <label htmlFor="placeholder_boolean"></label>
          </div>

          <label htmlFor="placeholder_number1">Placeholder_number1</label>
          <input
            type="number"
            name="placeholder_number1"
            value={formData.placeholder_number1}
            onChange={handleChange}
          />

          <label htmlFor="placeholder_number2">Placeholder_number2</label>
          <input
            type="number"
            name="placeholder_number2"
            value={formData.placeholder_number2}
            onChange={handleChange}
          />

          <label htmlFor="leader">Leader</label>
          <input
            type="text"
            name="leader"
            value={formData.leader}
            onChange={handleChange}
          />
          <span></span>
          <br/>
          <p></p>
          <button>Submit</button>
        </div>
      </form>

      <p>{error}</p>
    </div>
  );
}
