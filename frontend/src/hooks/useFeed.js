import { useState, useEffect, useMemo } from 'react';
import { api } from '../lib/api';
import { demoFoods } from '../lib/demoFoods';
import { filterFoods } from '../lib/filterFoods';

export function useFeed(query = '') {
  const [foods, setFoods] = useState(demoFoods);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadFoods = async () => {
    setLoading(true);
    try {
      const data = await api.get('/food');
      setFoods(data.foodItems?.length ? data.foodItems : demoFoods);
    } catch (err) {
      setError(err.message);
      setFoods(demoFoods);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFoods();
  }, []);

  const visibleFoods = useMemo(() => filterFoods(foods, query), [foods, query]);

  const addFood = (newFood) => {
    setFoods((current) => [
      newFood,
      ...current.filter((food) => !food._id.startsWith?.('demo-'))
    ]);
  };

  return {
    foods: visibleFoods,
    allFoods: foods,
    loading,
    error,
    refresh: loadFoods,
    addFood
  };
}
