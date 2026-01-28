import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (query = "") => {
  const { data } = await axios.get(`${BASE_URL}/search.php?s=${query}`);
  return data.meals || [];
};

export const getMealById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return data.meals[0];
};

export const getCategories = async () => {
  const { data } = await axios.get(`${BASE_URL}/categories.php`);
  return data.categories || [];
};

export const filterByCategory = async (category) => {
  const { data } = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return data.meals || [];
};
