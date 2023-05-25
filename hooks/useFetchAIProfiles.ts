import { useState, useEffect } from 'react';
import { Profile } from '../models';

const useFetchProfiles = (): [Profile[] | null, boolean, any] => {
  const [data, setData] = useState<Profile[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/AI.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return [data, loading, error];
};

export default useFetchProfiles;
