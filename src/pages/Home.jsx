import React, { useEffect, useState } from "react";
import HomeBannerBg from "../assets/HomeBannerBg.jpg";
import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSearch = async (query = "") => {
    try {
      const results = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      setMeals(results.data.meals || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const fetchInitialMeals = async () => {
    try {
      const results = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
      );
      setMeals(results.data.meals || []);
    } catch (error) {
      console.error("Error fetching initial meals:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const results = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      setCategories(results.data.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const onSelectCategory = async (category) => {
    try {
      const results = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      setMeals(results.data.meals || []);
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  };

  useEffect(() => {
    fetchInitialMeals();
    fetchCategories();
  }, []);

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center bg-cover h-96 flex-col mb-10"
        style={{ backgroundImage: `url(${HomeBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-xl md:text-5xl text-center relative text-white font-light flex flex-col items-center justify-center">
          <img src={logo} className=" h-30" alt="Logo" />
        </div>
        <p className="text-white text-center text-lg md:text-xl font-light relative mb-6">
            Discover delicious recipes from around the world
        </p>

        <div className="max-w-5xl relative">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mb-4">
        <h2 className="text-2xl font-semibold mb-2 px-4">Explore Recipes</h2>
        <CategoryFilter categories={categories} onSelectCategory= {onSelectCategory} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl mb-8">
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No meals found. Try searching for something else!
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
